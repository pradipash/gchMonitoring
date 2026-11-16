import { describe, expect, it } from 'vitest'
import {
  formatCountdown,
  formatDurationShort,
  formatUtcOffset,
  isDone,
  lastReset,
  msUntilReset,
  nextReset,
  toMillis,
  urgency,
} from './reset.js'

describe('reset time calculations', () => {
  const baGlobal = { resetHour: 4, resetMinute: 0, utcOffsetMin: 9 * 60, remindBeforeMin: 120 } // 19:00 UTC
  const akEn = { resetHour: 4, resetMinute: 0, utcOffsetMin: -7 * 60, remindBeforeMin: 120 } // 11:00 UTC

  it('finds lastReset when reset already occurred today in server time', () => {
    // 2026-11-15 20:00 UTC => 2026-11-16 05:00 UTC+9 (1h after 04:00 reset)
    const now = new Date('2026-11-15T20:00:00Z')
    expect(lastReset(baGlobal, now).toISOString()).toBe('2026-11-15T19:00:00.000Z')
    expect(nextReset(baGlobal, now).toISOString()).toBe('2026-11-16T19:00:00.000Z')
    expect(msUntilReset(baGlobal, now)).toBe(23 * 3600_000)
  })

  it('finds lastReset when reset is later today in server time', () => {
    // 2026-11-15 18:00 UTC => 2026-11-16 03:00 UTC+9 (1h before 04:00 reset)
    const now = new Date('2026-11-15T18:00:00Z')
    expect(lastReset(baGlobal, now).toISOString()).toBe('2026-11-14T19:00:00.000Z')
    expect(nextReset(baGlobal, now).toISOString()).toBe('2026-11-15T19:00:00.000Z')
    expect(msUntilReset(baGlobal, now)).toBe(3600_000)
  })

  it('handles negative UTC offsets crossing midnight cleanly', () => {
    // 2026-11-15 03:00 UTC => 2026-11-14 20:00 UTC-7 (last reset was 2026-11-14 04:00 UTC-7 = 2026-11-14 11:00 UTC)
    const now = new Date('2026-11-15T03:00:00Z')
    expect(lastReset(akEn, now).toISOString()).toBe('2026-11-14T11:00:00.000Z')
    expect(nextReset(akEn, now).toISOString()).toBe('2026-11-15T11:00:00.000Z')
  })

  it('treats exact reset boundary as the start of the new cycle', () => {
    const exactReset = new Date('2026-11-15T19:00:00Z')
    expect(lastReset(baGlobal, exactReset).toISOString()).toBe('2026-11-15T19:00:00.000Z')
    expect(nextReset(baGlobal, exactReset).toISOString()).toBe('2026-11-16T19:00:00.000Z')
    expect(msUntilReset(baGlobal, exactReset)).toBe(24 * 3600_000)
  })

  it('computes isDone across reset boundary and supports Firestore Timestamp-like objects', () => {
    const playedBeforeReset = {
      ...baGlobal,
      lastDoneAt: { toMillis: () => Date.parse('2026-11-15T18:59:59Z') },
    }
    expect(isDone(playedBeforeReset, new Date('2026-11-15T18:59:59Z'))).toBe(true)
    expect(isDone(playedBeforeReset, new Date('2026-11-15T19:00:00Z'))).toBe(false)

    const playedAtReset = {
      ...baGlobal,
      lastDoneAt: { toMillis: () => Date.parse('2026-11-15T19:00:00Z') },
    }
    expect(isDone(playedAtReset, new Date('2026-11-15T19:05:00Z'))).toBe(true)
    expect(isDone({ ...baGlobal, lastDoneAt: null }, new Date('2026-11-15T19:05:00Z'))).toBe(false)
  })

  it('computes urgency states (done, urgent, pending)', () => {
    // Next reset 19:00 UTC. At 17:30 UTC => 90m left <= 120m => urgent
    const nowUrgent = new Date('2026-11-15T17:30:00Z')
    expect(urgency(baGlobal, nowUrgent)).toBe('urgent')

    // At 16:59 UTC => 121m left > 120m => pending
    const nowPending = new Date('2026-11-15T16:59:00Z')
    expect(urgency(baGlobal, nowPending)).toBe('pending')

    // Marked done today => done even inside lead window
    const doneGame = { ...baGlobal, lastDoneAt: new Date('2026-11-15T10:00:00Z') }
    expect(urgency(doneGame, nowUrgent)).toBe('done')

    // Muted alerts => stays pending instead of urgent
    expect(urgency({ ...baGlobal, remindersEnabled: false }, nowUrgent)).toBe('pending')
  })

  it('handles half-hour offsets and formatting helpers', () => {
    const istGame = { resetHour: 5, resetMinute: 30, utcOffsetMin: 330 } // 00:00 UTC
    const now = new Date('2026-11-15T01:00:00Z')
    expect(lastReset(istGame, now).toISOString()).toBe('2026-11-15T00:00:00.000Z')
    expect(formatUtcOffset(330)).toBe('UTC+5:30')
    expect(formatUtcOffset(-240)).toBe('UTC-4')
    expect(formatCountdown(3661_000)).toBe('01:01:01')
    expect(formatDurationShort(110 * 60_000)).toBe('1h 50m')
    expect(formatDurationShort(45 * 60_000)).toBe('45m')
    expect(toMillis(undefined)).toBeNull()
  })
})
