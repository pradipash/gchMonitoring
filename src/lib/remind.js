import {
  DEFAULT_REMIND_BEFORE_MIN,
  formatDurationShort,
  isDone,
  msUntilReset,
  nextReset,
  toMillis,
} from './reset.js'

export function findDueGames(games, now = new Date()) {
  return games
    .filter((game) => {
      if (!game.remindersEnabled || isDone(game, now)) return false
      const leadMin = game.remindBeforeMin ?? DEFAULT_REMIND_BEFORE_MIN
      const withinWindow = msUntilReset(game, now) <= leadMin * 60_000
      const targetResetMs = nextReset(game, now).getTime()
      const alreadySent = toMillis(game.lastRemindedFor) === targetResetMs
      return withinWindow && !alreadySent
    })
    .sort((a, b) => msUntilReset(a, now) - msUntilReset(b, now))
}

export function formatDiscordMessage(dueGames, now = new Date()) {
  const lines = dueGames.map((game) => {
    const serverPart = game.server ? ` (${game.server})` : ''
    const left = formatDurationShort(msUntilReset(game, now))
    return `• **${game.name}**${serverPart} — resets in **${left}**`
  })
  return `⏰ **Daily reset approaching — not done yet:**\n${lines.join('\n')}`
}
