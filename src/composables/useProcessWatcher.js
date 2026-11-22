import { onBeforeUnmount, ref, watch } from 'vue'
import { findAutoCheckCandidates, matchRunningGame } from '@/lib/processMatch'
import { isDone, nextReset } from '@/lib/reset'

const WATCHER_URL = 'http://127.0.0.1:41937/status'
const ENABLED_STORAGE_KEY = 'gch-watcher-enabled'
const NOTIF_STORAGE_KEY = 'gch-browser-notif-enabled'
const ACTIVE_POLL_MS = 5000
const OFFLINE_BACKOFF_MS = 15_000

function readBool(key) {
  try {
    return localStorage.getItem(key) === 'true'
  } catch {
    return false
  }
}

function writeBool(key, value) {
  try {
    if (value) {
      localStorage.setItem(key, 'true')
    } else {
      localStorage.removeItem(key)
    }
  } catch {
    // Ignore storage errors
  }
}

export function useProcessWatcher({ games, now, onAutoCheck }) {
  const enabled = ref(typeof window !== 'undefined' ? readBool(ENABLED_STORAGE_KEY) : false)
  const browserNotifEnabled = ref(
    typeof window !== 'undefined' ? readBool(NOTIF_STORAGE_KEY) : false,
  )
  const status = ref(enabled.value ? 'offline' : 'off')
  const notifPermission = ref(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'unsupported',
  )
  const pendingMatches = ref([])

  const suppressedResetByGameId = {}
  const inFlightIds = new Set()
  let timerId = null
  let disposed = false

  function suppressForCycle(game, at = now.value) {
    if (!game?.id) return
    suppressedResetByGameId[game.id] = nextReset(game, at).getTime()
  }

  function clearSchedule() {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  function scheduleNext(delayMs) {
    clearSchedule()
    if (disposed || !enabled.value || typeof window === 'undefined') return
    timerId = setTimeout(pollOnce, delayMs)
  }

  function sendBackgroundNotification(game) {
    if (
      !browserNotifEnabled.value ||
      typeof window === 'undefined' ||
      !('Notification' in window) ||
      document.visibilityState !== 'hidden' ||
      Notification.permission !== 'granted'
    ) {
      return
    }
    try {
      const notif = new Notification(`${game.name} auto-checked`, {
        body: 'Detected game running on PC and marked dailies done.',
        tag: `auto-check-${game.id}`,
      })
      notif.onclick = () => {
        window.focus()
        notif.close()
      }
    } catch {
      // Ignore environments where Notification constructor is restricted
    }
  }

  async function pollOnce() {
    if (!enabled.value || disposed) return

    let nextDelay = OFFLINE_BACKOFF_MS
    try {
      const controller = new AbortController()
      const abortTimer = setTimeout(() => controller.abort(), 3000)
      const res = await fetch(WATCHER_URL, {
        cache: 'no-store',
        signal: controller.signal,
      })
      clearTimeout(abortTimer)

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }
      const data = await res.json()
      const entries = Array.isArray(data?.entries) ? data.entries : []

      status.value = 'connected'
      nextDelay = ACTIVE_POLL_MS

      const currentTime = now.value ?? new Date()
      const activePending = []
      for (const game of games.value ?? []) {
        if (!game?.id || game.hidden || isDone(game, currentTime)) continue
        const match = matchRunningGame(game, entries)
        if (match) {
          activePending.push({ id: game.id, name: game.name, runningMs: match.runningMs ?? 0 })
        }
      }
      pendingMatches.value = activePending

      const candidates = findAutoCheckCandidates(games.value, entries, {
        now: currentTime,
        suppressedResetByGameId,
      })

      for (const { game, entry } of candidates) {
        if (inFlightIds.has(game.id)) continue
        inFlightIds.add(game.id)
        try {
          await onAutoCheck(game, entry)
          sendBackgroundNotification(game)
        } finally {
          inFlightIds.delete(game.id)
        }
      }
    } catch {
      status.value = enabled.value ? 'offline' : 'off'
      pendingMatches.value = []
      nextDelay = OFFLINE_BACKOFF_MS
    } finally {
      scheduleNext(nextDelay)
    }
  }

  function setEnabled(next) {
    const val = Boolean(next)
    enabled.value = val
    writeBool(ENABLED_STORAGE_KEY, val)
    if (!val) {
      clearSchedule()
      status.value = 'off'
      pendingMatches.value = []
    } else {
      status.value = 'offline'
      pollOnce()
    }
  }

  async function setBrowserNotifEnabled(next) {
    const val = Boolean(next)
    if (!val) {
      browserNotifEnabled.value = false
      writeBool(NOTIF_STORAGE_KEY, false)
      return
    }
    if (typeof window === 'undefined' || !('Notification' in window)) {
      notifPermission.value = 'unsupported'
      browserNotifEnabled.value = false
      return
    }
    let perm = Notification.permission
    if (perm === 'default') {
      perm = await Notification.requestPermission()
    }
    notifPermission.value = perm
    const granted = perm === 'granted'
    browserNotifEnabled.value = granted
    writeBool(NOTIF_STORAGE_KEY, granted)
  }

  function handleVisibilityChange() {
    if (enabled.value && document.visibilityState === 'visible') {
      pollOnce()
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange)
  }

  watch(
    enabled,
    (isEnabled) => {
      if (isEnabled) {
        pollOnce()
      } else {
        clearSchedule()
        status.value = 'off'
      }
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    disposed = true
    clearSchedule()
    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  })

  return {
    enabled,
    browserNotifEnabled,
    notifPermission,
    status,
    pendingMatches,
    setEnabled,
    setBrowserNotifEnabled,
    suppressForCycle,
    pollOnce,
  }
}
