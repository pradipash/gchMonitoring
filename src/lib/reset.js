export const DAY_MS = 86_400_000
export const DEFAULT_REMIND_BEFORE_MIN = 120

/**
 * Convert a Date, Firestore Timestamp-like object, number, or ISO string to epoch ms.
 * Returns null when missing or invalid.
 */
export function toMillis(value) {
  if (value == null) return null
  if (typeof value?.toMillis === 'function') return value.toMillis()
  if (typeof value === 'number') return Number.isFinite(value) ? value : null
  const ms = new Date(value).getTime()
  return Number.isFinite(ms) ? ms : null
}

/**
 * Compute the most recent reset moment <= `now` for a game using its fixed server UTC offset.
 * Fixed offsets are used intentionally because game servers do not shift for local DST.
 */
export function lastReset(game, now = new Date()) {
  const nowMs = now instanceof Date ? now.getTime() : Number(now)
  const offsetMs = (game.utcOffsetMin ?? 0) * 60_000
  const serverNow = new Date(nowMs + offsetMs)

  const resetServerMs = Date.UTC(
    serverNow.getUTCFullYear(),
    serverNow.getUTCMonth(),
    serverNow.getUTCDate(),
    game.resetHour ?? 0,
    game.resetMinute ?? 0,
    0,
    0,
  )

  let resetMs = resetServerMs - offsetMs
  if (resetMs > nowMs) {
    resetMs -= DAY_MS
  }
  return new Date(resetMs)
}

/**
 * Compute the next upcoming reset moment > `now` for a game.
 */
export function nextReset(game, now = new Date()) {
  return new Date(lastReset(game, now).getTime() + DAY_MS)
}

/**
 * A game counts as done for the current cycle iff `lastDoneAt` is at or after the latest reset.
 */
export function isDone(game, now = new Date()) {
  const doneMs = toMillis(game?.lastDoneAt)
  if (doneMs === null) return false
  return doneMs >= lastReset(game, now).getTime()
}

/**
 * Milliseconds remaining until the next reset.
 */
export function msUntilReset(game, now = new Date()) {
  const nowMs = now instanceof Date ? now.getTime() : Number(now)
  return Math.max(0, nextReset(game, now).getTime() - nowMs)
}

/**
 * Visual & notification urgency state: 'done' | 'urgent' | 'pending'.
 */
export function urgency(game, now = new Date()) {
  if (isDone(game, now)) return 'done'
  const leadMin = game?.remindBeforeMin ?? DEFAULT_REMIND_BEFORE_MIN
  return msUntilReset(game, now) <= leadMin * 60_000 ? 'urgent' : 'pending'
}

/**
 * Format remaining milliseconds as HH:MM:SS.
 */
export function formatCountdown(ms) {
  const clamped = Math.max(0, Math.floor(ms / 1000))
  const hours = Math.floor(clamped / 3600)
  const minutes = Math.floor((clamped % 3600) / 60)
  const seconds = clamped % 60
  return [hours, minutes, seconds].map((n) => String(n).padStart(2, '0')).join(':')
}

/**
 * Format remaining milliseconds compactly for badges and Discord notifications, e.g. "1h 50m".
 */
export function formatDurationShort(ms) {
  const totalMin = Math.max(0, Math.ceil(ms / 60_000))
  if (totalMin <= 1) return 'under 1m'
  const hours = Math.floor(totalMin / 60)
  const minutes = totalMin % 60
  if (hours === 0) return `${minutes}m`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}

/**
 * Format a fixed UTC offset in minutes as "UTC+9", "UTC-4", "UTC+5:30", etc.
 */
export function formatUtcOffset(offsetMin) {
  if (!offsetMin) return 'UTC+0'
  const sign = offsetMin >= 0 ? '+' : '-'
  const abs = Math.abs(offsetMin)
  const hours = Math.floor(abs / 60)
  const minutes = abs % 60
  return minutes === 0
    ? `UTC${sign}${hours}`
    : `UTC${sign}${hours}:${String(minutes).padStart(2, '0')}`
}

/**
 * Format the game's reset time in the viewer's local timezone as 24h HH:MM.
 */
export function formatLocalResetTime(game, now = new Date()) {
  const target = nextReset(game, now)
  const hh = String(target.getHours()).padStart(2, '0')
  const mm = String(target.getMinutes()).padStart(2, '0')
  return `${hh}:${mm}`
}

/**
 * Format the game's configured server reset time as HH:MM.
 */
export function formatServerResetTime(game) {
  const hh = String(game?.resetHour ?? 0).padStart(2, '0')
  const mm = String(game?.resetMinute ?? 0).padStart(2, '0')
  return `${hh}:${mm}`
}
