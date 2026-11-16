import { describe, expect, it } from 'vitest'
import { normalizeGamePayload } from './gamePayload.js'

describe('normalizeGamePayload', () => {
  it('trims text fields and coerces booleans/numbers cleanly', () => {
    expect(
      normalizeGamePayload({
        name: '  Arknights  ',
        server: ' EN ',
        iconUrl: ' /gchMonitoring/icons/ak.png ',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: -420,
        remindBeforeMin: 120,
        remindersEnabled: 1,
        hidden: 0,
      }),
    ).toEqual({
      name: 'Arknights',
      server: 'EN',
      iconUrl: '/gchMonitoring/icons/ak.png',
      resetHour: 4,
      resetMinute: 0,
      utcOffsetMin: -420,
      remindBeforeMin: 120,
      remindersEnabled: true,
      hidden: false,
    })
  })

  it('rejects empty or whitespace-only names and invalid numbers', () => {
    expect(() =>
      normalizeGamePayload({
        name: '   ',
        resetHour: 4,
        resetMinute: 0,
        utcOffsetMin: 0,
        remindBeforeMin: 120,
      }),
    ).toThrow('Game name is required.')

    expect(() =>
      normalizeGamePayload({
        name: 'Test',
        resetHour: 25,
        resetMinute: 0,
        utcOffsetMin: 0,
        remindBeforeMin: 120,
      }),
    ).toThrow('Reset hour must be between 0 and 23.')
  })
})
