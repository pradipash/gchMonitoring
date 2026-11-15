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
import { ref, watch } from 'vue'
import { db } from '@/firebase'
import { DEFAULT_GAMES } from '@/lib/defaultGames'
import { isDone } from '@/lib/reset'

export function useGames(userRef) {
  const games = ref([])
  const loading = ref(true)
  const syncing = ref(false)
  const offline = ref(false)
  const error = ref('')

  let unsubscribe = null
  const seededCheckDone = new Set()

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
        games.value = []
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
          games.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
          syncing.value = snap.metadata.hasPendingWrites
          offline.value = snap.metadata.fromCache
          loading.value = false

          if (snap.empty && !snap.metadata.fromCache) {
            seedDefaultsIfNeeded(uid).catch((err) => {
              error.value = err?.message || 'Could not seed default games.'
            })
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

  async function toggleDone(game, now = new Date()) {
    const uid = userRef.value?.uid
    if (!uid || !game?.id) return
    const nextValue = isDone(game, now) ? null : serverTimestamp()
    await updateDoc(doc(db, 'users', uid, 'games', game.id), {
      lastDoneAt: nextValue,
    })
  }

  async function saveGame(id, data) {
    const uid = userRef.value?.uid
    if (!uid) return

    const payload = {
      name: data.name.trim(),
      server: data.server.trim(),
      iconUrl: data.iconUrl.trim(),
      resetHour: Number(data.resetHour),
      resetMinute: Number(data.resetMinute),
      utcOffsetMin: Number(data.utcOffsetMin),
      remindBeforeMin: Number(data.remindBeforeMin),
      remindersEnabled: Boolean(data.remindersEnabled),
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
    const uid = userRef.value?.uid
    if (!uid || !id) return
    await setDoc(doc(db, 'users', uid), { seededAt: serverTimestamp() }, { merge: true })
    await deleteDoc(doc(db, 'users', uid, 'games', id))
  }

  async function reorderGames(orderedList) {
    const uid = userRef.value?.uid
    if (!uid) return
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
    loading,
    syncing,
    offline,
    error,
    toggleDone,
    saveGame,
    deleteGame,
    reorderGames,
  }
}
