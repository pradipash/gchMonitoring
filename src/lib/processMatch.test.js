import { describe, expect, it } from 'vitest'
import { findAutoCheckCandidates, matchRunningGame } from './processMatch.js'

describe('processMatch', () => {
  const games = [
    { id: 'ba', name: 'Blue Archive', resetHour: 4, resetMinute: 0, utcOffsetMin: 540 },
    { id: 'zzz', name: 'Zenless Zone Zero', resetHour: 4, resetMinute: 0, utcOffsetMin: 480 },
    { id: 'ak', name: 'Arknights', resetHour: 4, resetMinute: 0, utcOffsetMin: -420 },
    { id: 'gfl2', name: 'Girls Frontline 2', resetHour: 5, resetMinute: 0, utcOffsetMin: -240 },
    { id: 'wuwa', name: 'Wuthering Waves', resetHour: 4, resetMinute: 0, utcOffsetMin: 480 },
  ]

  it('matches native .exe process names cleanly', () => {
    expect(
      matchRunningGame(games[0], [{ process: 'BlueArchive.exe', title: '', runningMs: 70_000 }]),
    )?.toMatchObject({ process: 'BlueArchive.exe' })

    expect(
      matchRunningGame(games[1], [{ process: 'ZenlessZoneZero', title: 'ZenlessZoneZero', runningMs: 65_000 }]),
    )?.toMatchObject({ process: 'ZenlessZoneZero' })

    expect(
      matchRunningGame(games[3], [{ process: 'GF2_Exilium', title: '', runningMs: 60_000 }]),
    )?.toMatchObject({ process: 'GF2_Exilium' })
  })

  it('matches emulator / Google Play Games window titles', () => {
    const entries = [{ process: 'crosvm', title: 'Arknights', runningMs: 90_000 }]
    expect(matchRunningGame(games[2], entries))?.toMatchObject({ process: 'crosvm', title: 'Arknights' })
  })

  it('ignores browser, chat, and editor window titles to prevent false positives', () => {
    const entries = [
      { process: 'chrome', title: 'Arknights Guide - YouTube - Google Chrome', runningMs: 120_000 },
      { process: 'discord', title: '#zenless-zone-zero - Discord', runningMs: 120_000 },
      { process: 'Code', title: 'Blue Archive notes - Visual Studio Code', runningMs: 120_000 },
    ]
    expect(matchRunningGame(games[0], entries)).toBeNull()
    expect(matchRunningGame(games[1], entries)).toBeNull()
    expect(matchRunningGame(games[2], entries)).toBeNull()
  })

  it('matches custom games by compact process or non-ignored title', () => {
    expect(
      matchRunningGame(games[4], [{ process: 'Client-Win64-Shipping', title: 'Wuthering Waves', runningMs: 62_000 }]),
    )?.toMatchObject({ title: 'Wuthering Waves' })

    expect(
      matchRunningGame(games[4], [{ process: 'WutheringWaves.exe', title: '', runningMs: 62_000 }]),
    )?.toMatchObject({ process: 'WutheringWaves.exe' })
  })

  it('enforces the 60s hold threshold, skips hidden/done games, and honors suppression per reset cycle', () => {
    const now = new Date('2026-11-22T10:00:00Z')
    const entries = [
      { process: 'ZenlessZoneZero', title: 'ZenlessZoneZero', runningMs: 59_999 },
      { process: 'GF2_Exilium', title: "Girls' Frontline 2: Exilium", runningMs: 60_000 },
      { process: 'BlueArchive', title: 'Blue Archive', runningMs: 90_000 },
      { process: 'crosvm', title: 'Arknights', runningMs: 90_000 },
    ]

    const list = [
      games[0],
      games[1],
      { ...games[2], hidden: true },
      games[3],
    ]

    const result = findAutoCheckCandidates(list, entries, {
      now,
      suppressedResetByGameId: {
        ba: Date.parse('2026-11-22T19:00:00Z'), // suppressed until next reset
      },
    })

    // zzz is < 60_000ms, ak is hidden, ba is suppressed, only gfl2 qualifies
    expect(result.map((c) => c.game.id)).toEqual(['gfl2'])

    // After BA's reset passes, suppression timestamp is in the past so BA is eligible again
    const afterReset = new Date('2026-11-22T19:00:01Z')
    const afterResult = findAutoCheckCandidates([games[0]], entries, {
      now: afterReset,
      suppressedResetByGameId: {
        ba: Date.parse('2026-11-22T19:00:00Z'),
      },
    })
    expect(afterResult.map((c) => c.game.id)).toEqual(['ba'])
  })
})
