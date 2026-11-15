import { computed, ref } from 'vue'

const STORAGE_KEY = 'color-scheme'
const CYCLE_ORDER = ['system', 'light', 'dark']

function readStoredPreference() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : 'system'
  } catch {
    return 'system'
  }
}

function writeMetaAndStorage(pref) {
  const metaContent = pref === 'system' ? 'light dark' : pref
  const meta = document.querySelector('meta[name="color-scheme"]')
  if (meta) {
    meta.setAttribute('content', metaContent)
  }
  try {
    if (pref === 'system') {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, pref)
    }
  } catch {
    // Ignore storage errors (e.g., private mode restrictions)
  }
}

const preference = ref('system')
const systemPrefersDark = ref(false)
let initialized = false

function ensureInitialized() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  preference.value = readStoredPreference()
  writeMetaAndStorage(preference.value)

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemPrefersDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', (e) => {
    systemPrefersDark.value = e.matches
  })

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      preference.value = readStoredPreference()
      writeMetaAndStorage(preference.value)
    }
  })
}

const resolvedTheme = computed(() => {
  if (preference.value === 'light' || preference.value === 'dark') {
    return preference.value
  }
  return systemPrefersDark.value ? 'dark' : 'light'
})

function setTheme(nextPref) {
  preference.value = nextPref === 'light' || nextPref === 'dark' ? nextPref : 'system'
  writeMetaAndStorage(preference.value)
}

function cycleTheme() {
  const idx = CYCLE_ORDER.indexOf(preference.value)
  setTheme(CYCLE_ORDER[(idx + 1) % CYCLE_ORDER.length])
}

export function useTheme() {
  ensureInitialized()
  return {
    preference,
    resolvedTheme,
    systemPrefersDark,
    setTheme,
    cycleTheme,
  }
}
