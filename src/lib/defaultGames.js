const BASE = import.meta.env?.BASE_URL ?? '/gchMonitoring/'

export const DEFAULT_GAMES = [
  {
    id: 'ba',
    name: 'Blue Archive',
    server: 'Global',
    iconUrl: `${BASE}icons/ba.png`,
    resetHour: 4,
    resetMinute: 0,
    utcOffsetMin: 540, // UTC+9 -> 02:00 UTC+7
    remindBeforeMin: 120,
    remindersEnabled: true,
    hidden: false,
    order: 0,
  },
  {
    id: 'zzz',
    name: 'Zenless Zone Zero',
    server: 'Asia',
    iconUrl: `${BASE}icons/zzz.png`,
    resetHour: 4,
    resetMinute: 0,
    utcOffsetMin: 480, // UTC+8 -> 03:00 UTC+7
    remindBeforeMin: 120,
    remindersEnabled: true,
    hidden: false,
    order: 1,
  },
  {
    id: 'ak',
    name: 'Arknights',
    server: 'EN',
    iconUrl: `${BASE}icons/ak.png`,
    resetHour: 4,
    resetMinute: 0,
    utcOffsetMin: -420, // UTC-7 -> 18:00 UTC+7
    remindBeforeMin: 120,
    remindersEnabled: true,
    hidden: false,
    order: 2,
  },
  {
    id: 'gfl2',
    name: 'Girls Frontline 2',
    server: 'Darkwinter',
    iconUrl: `${BASE}icons/gfl2.png`,
    resetHour: 5,
    resetMinute: 0,
    utcOffsetMin: -240, // UTC-4 -> 16:00 UTC+7
    remindBeforeMin: 120,
    remindersEnabled: true,
    hidden: false,
    order: 3,
  },
]
