import { describe, expect, it } from 'vitest'
import { findDueGames, formatDiscordMessage } from './remind.mjs'

describe('reminder selection and dedupe', () => {
  const now = new Date('2026-11-15T09:30:00Z')

  it('selects only enabled, unfinished games inside lead window that were not yet reminded', () => {
    const games = [
      {
        id: 'ak',
        name: 'Arknights',
        server: 'EN',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: -420, // 11:00 UTC -> 90m left
        remindBeforeMin: 120,
        remindersEnabled: true,
        lastDoneAt: null,
        lastRemindedFor: null,
      },
      {
        id: 'ak-dup',
        name: 'Arknights Dup',
        server: 'EN',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: -420,
        remindBeforeMin: 120,
        remindersEnabled: true,
        lastDoneAt: null,
        lastRemindedFor: { toMillis: () => Date.parse('2026-11-15T11:00:00Z') },
      },
      {
        id: 'ak-done',
        name: 'Arknights Done',
        server: 'EN',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: -420,
        remindBeforeMin: 120,
        remindersEnabled: true,
        lastDoneAt: { toMillis: () => Date.parse('2026-11-15T08:00:00Z') },
        lastRemindedFor: null,
      },
      {
        id: 'ak-disabled',
        name: 'Arknights Muted',
        server: 'EN',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: -420,
        remindBeforeMin: 120,
        remindersEnabled: false,
        lastDoneAt: null,
        lastRemindedFor: null,
      },
    ]

    const due = findDueGames(games, now)
    expect(due.map((g) => g.id)).toEqual(['ak'])
    expect(formatDiscordMessage(due, now)).toContain('**Arknights** (EN) — resets in **1h 30m**')
  })
})
