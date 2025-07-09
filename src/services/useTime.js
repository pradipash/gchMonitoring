// src/composables/useTime.js
import { ref, computed } from 'vue'

const currentTime = ref(new Date())

setInterval(() => {
  currentTime.value = new Date()
}, 1000)

const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString('en-US', { hour12: false })
})

const formattedDateTime = computed(() => {
  return currentTime.value.toLocaleDateString()
})

function getTimeUntilReset(resetTime) {
  if (typeof resetTime !== 'string') return 'Invalid reset time'

  const now = currentTime.value
  const [hourStr, minuteStr] = resetTime.split(':')
  const resetHour = parseInt(hourStr)
  const resetMinute = parseInt(minuteStr)

  const reset = new Date(now)
  reset.setHours(resetHour, resetMinute, 0, 0)

  if (reset <= now) {
    reset.setDate(reset.getDate() + 1)
  }

  const diffMs = reset - now
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}





export function useTime() {
  return {
    currentTime,
    formattedTime,
    formattedDateTime,
    getTimeUntilReset,
  }
}
