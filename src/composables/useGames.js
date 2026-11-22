import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { computed, ref, watch } from 'vue'
import { db } from '@/firebase'
import { DEFAULT_GAMES } from '@/lib/defaultGames'
import { normalizeGamePayload } from '@/lib/gamePayload'
import { isDone } from '@/lib/reset'

const GUEST_STORAGE_KEY = 'gch-guest-games'

function buildDefaultGuestGames() {
  return DEFAULT_GAMES.map((g) => ({
    ...g,
    lastDoneAt: null,
    lastRemindedFor: null,
  }))
}

function loadGuestGames() {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY)
    if (!raw) return buildDefaultGuestGames()
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || parsed.length === 0) return buildDefaultGuestGames()
    return parsed.map((g, idx) => ({
      ...g,
      order: g.order ?? idx,
      hidden: Boolean(g.hidden),
      remindersEnabled: g.remindersEnabled ?? true,
      iconUrl:
        typeof g.iconUrl === 'string'
          ? g.iconUrl.replace(/\/icons\/ba\.svg$/, '/icons/ba.png')
          : '',
    }))
  } catch {
    return buildDefaultGuestGames()
  }
}

function saveGuestGames(list) {
  try {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(list))
  } catch {
    // Ignore storage write errors
  }
}

export function useGames(userRef) {
  const games = ref([])
  const loading = ref(true)
  const syncing = ref(false)
  const offline = ref(false)
  const error = ref('')

  const isGuest = computed(() => !userRef.value?.uid)

  let unsubscribe = null
  const seededCheckDone = new Set()
  const migratedIcons = new Set()

  function migrateLegacyIcons(uid, list) {
    for (const game of list) {
      if (migratedIcons.has(game.id)) continue
      if (typeof game.iconUrl === 'string' && game.iconUrl.endsWith('/icons/ba.svg')) {
        migratedIcons.add(game.id)
        const nextUrl = game.iconUrl.replace(/\/icons\/ba\.svg$/, '/icons/ba.png')
        updateDoc(doc(db, 'users', uid, 'games', game.id), { iconUrl: nextUrl }).catch(() => {})
      }
    }
  }

  async function seedDefaultsIfNeeded(uid) {
    if (seededCheckDone.has(uid)) return
    seededCheckDone.add(uid)

    const userDocRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists() && userSnap.data()?.seededAt) return

    const batch = writeBatch(db)
    for (const game of DEFAULT_GAMES) {
      const { id, ...data } = game
      batch.set(doc(db, 'users', uid, 'games', id), {
        ...data,
        lastDoneAt: null,
        lastRemindedFor: null,
      })
    }
    batch.set(userDocRef, { seededAt: serverTimestamp() }, { merge: true })
    await batch.commit()
  }

  watch(
    () => userRef.value?.uid ?? null,
    (uid) => {
      if (unsubscribe) {
        unsubscribe()
        unsubscribe = null
      }

      if (!uid) {
        games.value = loadGuestGames()
        loading.value = false
        syncing.value = false
        offline.value = false
        error.value = ''
        return
      }

      loading.value = true
      error.value = ''

      const gamesQuery = query(collection(db, 'users', uid, 'games'), orderBy('order', 'asc'))
      unsubscribe = onSnapshot(
        gamesQuery,
        { includeMetadataChanges: true },
        (snap) => {
          games.value = snap.docs.map((d) => ({
            id: d.id,
            ...d.data({ serverTimestamps: 'estimate' }),
          }))
          syncing.value = snap.metadata.hasPendingWrites
          offline.value = snap.metadata.fromCache
          loading.value = false

          if (snap.empty && !snap.metadata.fromCache) {
            seedDefaultsIfNeeded(uid).catch((err) => {
              error.value = err?.message || 'Could not seed default games.'
            })
          } else {
            migrateLegacyIcons(uid, games.value)
          }
        },
        (err) => {
          loading.value = false
          error.value = err?.message || 'Failed to sync games.'
        },
      )
    },
    { immediate: true },
  )

  function updateGuestGame(id, patch) {
    games.value = games.value.map((g) => (g.id === id ? { ...g, ...patch } : g))
    saveGuestGames(games.value)
  }

  async function setDoneState(game, nextDone, now = new Date()) {
    if (!game?.id) return
    const uid = userRef.value?.uid

    if (!uid) {
      updateGuestGame(game.id, {
        lastDoneAt: nextDone ? now.toISOString() : null,
      })
      return
    }

    await updateDoc(doc(db, 'users', uid, 'games', game.id), {
      lastDoneAt: nextDone ? serverTimestamp() : null,
    })
  }

  async function toggleDone(game, now = new Date()) {
    if (!game?.id) return
    await setDoneState(game, !isDone(game, now), now)
  }

  async function markDone(game, now = new Date()) {
    if (!game?.id || isDone(game, now)) return
    await setDoneState(game, true, now)
  }

  async function markNotDone(game) {
    if (!game?.id) return
    await setDoneState(game, false)
  }

  async function toggleMute(game) {
    if (!game?.id) return
    const uid = userRef.value?.uid
    const nextEnabled = game.remindersEnabled === false

    if (!uid) {
      updateGuestGame(game.id, { remindersEnabled: nextEnabled })
      return
    }

    await updateDoc(doc(db, 'users', uid, 'games', game.id), {
      remindersEnabled: nextEnabled,
    })
  }

  async function toggleHidden(game) {
    if (!game?.id) return
    const uid = userRef.value?.uid
    const nextHidden = !game.hidden

    if (!uid) {
      updateGuestGame(game.id, { hidden: nextHidden })
      return
    }

    await updateDoc(doc(db, 'users', uid, 'games', game.id), {
      hidden: nextHidden,
    })
  }

  async function saveGame(id, data) {
    const uid = userRef.value?.uid
    const payload = normalizeGamePayload(data)

    if (!uid) {
      if (id) {
        updateGuestGame(id, payload)
      } else {
        const maxOrder = games.value.reduce((max, g) => Math.max(max, g.order ?? 0), -1)
        games.value = [
          ...games.value,
          {
            id: `guest-${Date.now()}`,
            ...payload,
            order: maxOrder + 1,
            lastDoneAt: null,
            lastRemindedFor: null,
          },
        ]
        saveGuestGames(games.value)
      }
      return
    }

    if (id) {
      await updateDoc(doc(db, 'users', uid, 'games', id), payload)
    } else {
      await setDoc(doc(db, 'users', uid), { seededAt: serverTimestamp() }, { merge: true })
      const maxOrder = games.value.reduce((max, g) => Math.max(max, g.order ?? 0), -1)
      await addDoc(collection(db, 'users', uid, 'games'), {
        ...payload,
        order: maxOrder + 1,
        lastDoneAt: null,
        lastRemindedFor: null,
      })
    }
  }

  async function deleteGame(id) {
    if (!id) return
    const uid = userRef.value?.uid

    if (!uid) {
      games.value = games.value.filter((g) => g.id !== id)
      saveGuestGames(games.value)
      return
    }

    await setDoc(doc(db, 'users', uid), { seededAt: serverTimestamp() }, { merge: true })
    await deleteDoc(doc(db, 'users', uid, 'games', id))
  }

  async function reorderGames(orderedList) {
    const uid = userRef.value?.uid

    if (!uid) {
      games.value = orderedList.map((g, index) => ({ ...g, order: index }))
      saveGuestGames(games.value)
      return
    }

    const batch = writeBatch(db)
    let changed = false
    orderedList.forEach((game, index) => {
      if (game.order !== index) {
        batch.update(doc(db, 'users', uid, 'games', game.id), { order: index })
        changed = true
      }
    })
    if (changed) {
      await batch.commit()
    }
  }

  return {
    games,
    isGuest,
    loading,
    syncing,
    offline,
    error,
    toggleDone,
    markDone,
    markNotDone,
    toggleMute,
    toggleHidden,
    saveGame,
    deleteGame,
    reorderGames,
  }
}
