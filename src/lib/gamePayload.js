export function normalizeGamePayload(data) {
  const name = String(data?.name ?? '').trim()
  if (!name) {
    throw new Error('Game name is required.')
  }

  const resetHour = Number(data?.resetHour)
  const resetMinute = Number(data?.resetMinute)
  const utcOffsetMin = Number(data?.utcOffsetMin)
  const remindBeforeMin = Number(data?.remindBeforeMin)

  if (!Number.isInteger(resetHour) || resetHour < 0 || resetHour > 23) {
    throw new Error('Reset hour must be between 0 and 23.')
  }
  if (!Number.isInteger(resetMinute) || resetMinute < 0 || resetMinute > 59) {
    throw new Error('Reset minute must be between 0 and 59.')
  }
  if (!Number.isFinite(utcOffsetMin) || utcOffsetMin < -720 || utcOffsetMin > 840) {
    throw new Error('Server timezone offset is out of range.')
  }
  if (!Number.isFinite(remindBeforeMin) || remindBeforeMin < 1 || remindBeforeMin > 1440) {
    throw new Error('Reminder lead time must be between 1 and 1440 minutes.')
  }

  return {
    name,
    server: String(data?.server ?? '').trim(),
    iconUrl: String(data?.iconUrl ?? '').trim(),
    resetHour,
    resetMinute,
    utcOffsetMin,
    remindBeforeMin,
    remindersEnabled: Boolean(data?.remindersEnabled),
    hidden: Boolean(data?.hidden),
  }
}
