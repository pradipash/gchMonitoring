import { isDone } from './reset.js'

export const AUTO_CHECK_HOLD_MS = 60_000

export const IGNORED_TITLE_PROCESSES = new Set([
  'chrome',
  'msedge',
  'firefox',
  'brave',
  'opera',
  'vivaldi',
  'arc',
  'discord',
  'code',
  'explorer',
  'obs64',
  'obs32',
  'vlc',
  'spotify',
  'steamwebhelper',
  'epicwebhelper',
  'powershell',
  'pwsh',
  'windowsterminal',
  'cmd',
])

const BUILTIN_RULES = [
  {
    match: (game) => game.id === 'ba' || normalizeName(game.name).includes('blue archive'),
    processes: ['bluearchive'],
    titles: ['blue archive'],
  },
  {
    match: (game) => game.id === 'zzz' || normalizeName(game.name).includes('zenless'),
    processes: ['zenlesszonezero'],
    titles: ['zenlesszonezero', 'zenless zone zero'],
  },
  {
    match: (game) => game.id === 'ak' || normalizeName(game.name).includes('arknights'),
    processes: ['arknights'],
    titles: ['arknights'],
  },
  {
    match: (game) => {
      const n = normalizeName(game.name)
      return game.id === 'gfl2' || n.includes('frontline 2') || n.includes('gfl2')
    },
    processes: ['gf2_exilium', 'gf2exilium'],
    titles: ["girls' frontline 2", 'girls frontline 2', 'gf2'],
  },
]

function normalizeName(value) {
  return String(value ?? '').trim().toLowerCase()
}

function stripExe(processName) {
  return normalizeName(processName).replace(/\.exe$/, '')
}

function compactAlnum(value) {
  return normalizeName(value).replace(/[^a-z0-9]/g, '')
}

function entryMatchesGame(game, entry) {
  const proc = stripExe(entry?.process)
  const title = normalizeName(entry?.title)
  if (!proc && !title) return false

  const titleAllowed = Boolean(title) && !IGNORED_TITLE_PROCESSES.has(proc)
  const builtin = BUILTIN_RULES.find((rule) => rule.match(game))

  if (builtin) {
    if (builtin.processes.includes(proc)) return true
    if (titleAllowed && builtin.titles.some((t) => title.includes(t))) return true
    return false
  }

  const gameName = normalizeName(game?.name)
  const compactGame = compactAlnum(game?.name)
  if (compactGame.length >= 4 && compactAlnum(proc) === compactGame) {
    return true
  }
  if (titleAllowed && gameName.length >= 4 && title.includes(gameName)) {
    return true
  }
  return false
}

/**
 * Return the longest-running process/window entry matching `game`, or null.
 */
export function matchRunningGame(game, entries) {
  if (!game || !Array.isArray(entries)) return null
  let best = null
  for (const entry of entries) {
    if (!entryMatchesGame(game, entry)) continue
    if (!best || (entry.runningMs ?? 0) > (best.runningMs ?? 0)) {
      best = entry
    }
  }
  return best
}

/**
 * Find visible, not-yet-done games that have been running continuously for at least `holdMs`
 * and are not suppressed for the current reset cycle.
 */
export function findAutoCheckCandidates(
  games,
  entries,
  { now = new Date(), holdMs = AUTO_CHECK_HOLD_MS, suppressedResetByGameId = {} } = {},
) {
  if (!Array.isArray(games) || !Array.isArray(entries)) return []
  const nowMs = now instanceof Date ? now.getTime() : Number(now)
  const candidates = []

  for (const game of games) {
    if (!game?.id || game.hidden) continue
    if (isDone(game, now)) continue

    const suppressedUntilMs = suppressedResetByGameId[game.id]
    if (typeof suppressedUntilMs === 'number' && nowMs < suppressedUntilMs) {
      continue
    }

    const match = matchRunningGame(game, entries)
    if (match && (match.runningMs ?? 0) >= holdMs) {
      candidates.push({ game, entry: match })
    }
  }

  return candidates
}
