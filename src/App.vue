<script setup>
import { reactive, watchEffect, onMounted } from 'vue'
import { useTime } from './services/useTime.js'

import zzzLogo2 from './assets/zzzLogo.png'
import blueArchiveLogo from './assets/ba.svg'
import gfl2Logo from './assets/gfl2-logo.png'
import Aklogo from './assets/akLogo.png'

import Navbar from './components/NavBar.vue'

const { formattedTime, formattedDateTime, getTimeUntilReset } = useTime()

const games = reactive([
  {
    name: 'GFL',
    done: false,
    image: gfl2Logo,
    resetTime: '17:15',
  },
  {
    name: 'BA',
    done: false,
    image: blueArchiveLogo,
    resetTime: '02:00',
  },
  {
    name: 'ZZZ',
    done: false,
    image: zzzLogo2,
    resetTime: '03:00',
  },
  {
    name: 'AK',
    done: false,
    image: Aklogo,
    resetTime: '18:00',
  },
])

// --- Load from localStorage if available ---
const savedState = JSON.parse(localStorage.getItem('gacha-checklist'))
if (savedState) {
  for (const game of games) {
    const saved = savedState.find((g) => g.name === game.name)
    if (saved) {
      game.done = saved.done
    }
  }
}

// --- Save to localStorage whenever changed ---
watchEffect(() => {
  const saveData = games.map((game) => ({
    name: game.name,
    done: game.done,
  }))
  localStorage.setItem('gacha-checklist', JSON.stringify(saveData))
})

// Helper to get today's date string
function todayDateString() {
  return new Date().toLocaleDateString()
}

function shouldResetGame(game) {
  const lastResetKey = `reset-${game.name}`
  const lastResetDate = localStorage.getItem(lastResetKey)

  const now = new Date()
  const [hr, min] = game.resetTime.split(':').map(Number)
  const resetTime = new Date(now)
  resetTime.setHours(hr, min, 0, 0)

  if (now >= resetTime && lastResetDate !== todayDateString()) {
    // Time has passed and hasn't reset yet today
    game.done = false
    localStorage.setItem(lastResetKey, todayDateString())
  }
}

// Periodically check if reset is needed
onMounted(() => {
  setInterval(() => {
    games.forEach((game) => shouldResetGame(game))
  }, 1000 * 60) // check every minute
})
</script>

<style scoped>
.gradient-card {
  /* fallback for old browsers */
  background: #6a85b6;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5));
}

.card-body {
  padding: 2rem;
  font-size: 1.1rem;
}

.card-title {
  font-size: 1.5rem;
}

img {
  max-height: 100px;
  object-fit: contain;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.04);
}
</style>

<template>
  <Navbar />
  <router-view />

  <div class="container py-2">
    <p class="text-center mt-3">
      🕒 Current time: {{ formattedTime }} {{ formattedDateTime /*change this into at navbar*/ }}
    </p>

    <div class="row g-4">
      <div class="col-12 col-md-6" v-for="game in games" :key="game.name">
        <div
          class="card cursor-box zoom-in"
          :class="{ 'bg-success text-white': game.done }"
          @click="game.done = !game.done"
          style="cursor: pointer"
        >
          <div class="card-body gradient-card">
            <div class="row">
              <div class="col-4 d-flex justify-content-center align-items-center border-end">
                <img :src="game.image" class="img-fluid rounded" />
              </div>
              <div class="col-8">
                <h5 class="card-title fw-bold">{{ game.name }}</h5>
                <h6 class="mb-1">🔁 Reset at: {{ game.resetTime }}</h6>
                <p class="mb-0">⏳ Resets in: {{ getTimeUntilReset(game.resetTime) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
