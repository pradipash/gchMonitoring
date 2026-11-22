import { describe, expect, it } from 'vitest'
import { updateTrackedEntries } from './watch-games.mjs'

describe('updateTrackedEntries', () => {
  it('accumulates continuous runtime, prunes closed processes, and resets if reopened', () => {
    const tracker = new Map()

    const first = updateTrackedEntries(
      tracker,
      [
        { ProcessName: 'ZenlessZoneZero', MainWindowTitle: 'ZenlessZoneZero' },
        { ProcessName: 'crosvm', MainWindowTitle: 'Arknights' },
        { ProcessName: 'crosvm', MainWindowTitle: 'Arknights' }, // duplicate
      ],
      1000,
    )
    expect(first).toEqual([
      { process: 'ZenlessZoneZero', title: 'ZenlessZoneZero', runningMs: 0 },
      { process: 'crosvm', title: 'Arknights', runningMs: 0 },
    ])

    // 65 seconds later, crosvm closed while ZenlessZoneZero stayed open
    const second = updateTrackedEntries(
      tracker,
      [{ ProcessName: 'ZenlessZoneZero', MainWindowTitle: 'ZenlessZoneZero' }],
      66_000,
    )
    expect(second).toEqual([
      { process: 'ZenlessZoneZero', title: 'ZenlessZoneZero', runningMs: 65_000 },
    ])

    // crosvm reopens at 70_000 -> its runningMs starts fresh at 0
    const third = updateTrackedEntries(
      tracker,
      [
        { ProcessName: 'ZenlessZoneZero', MainWindowTitle: 'ZenlessZoneZero' },
        { ProcessName: 'crosvm', MainWindowTitle: 'Arknights' },
      ],
      70_000,
    )
    expect(third).toEqual([
      { process: 'ZenlessZoneZero', title: 'ZenlessZoneZero', runningMs: 69_000 },
      { process: 'crosvm', title: 'Arknights', runningMs: 0 },
    ])
  })
})
