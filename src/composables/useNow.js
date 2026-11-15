import { computed, ref } from 'vue'

const now = ref(new Date())
let started = false

function ensureStarted() {
  if (started || typeof window === 'undefined') return
  started = true
  setInterval(() => {
    now.value = new Date()
  }, 1000)
}

const formattedTime = computed(() =>
  now.value.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }),
)

const formattedDate = computed(() =>
  now.value.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }),
)

export function useNow() {
  ensureStarted()
  return {
    now,
    formattedTime,
    formattedDate,
  }
}
