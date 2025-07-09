<script setup>
import { reactive } from 'vue'

import zzzLogo from './assets/zzz.png'
import blueArchiveLogo from './assets/ba.svg'
import gfl2Logo from './assets/gfl2-logo.png'
import Aklogo from './assets/akLogo.png'

import Navbar from './components/NavBar.vue'
import { useTime } from './services/useTime.js'

const { formattedTime, formattedDateTime, getTimeUntilReset } = useTime()

const games = reactive([
  {
    name: 'GFL',
    done: false,
    image: gfl2Logo,
    resetTime: '16:00',
  },
  {
    name: 'BA',
    done: false,
    image: blueArchiveLogo,
    resetTime: '12:00',
  },
  {
    name: 'ZZZ',
    done: false,
    image: zzzLogo,
    resetTime: '03:00',
  },
  {
    name: 'AK',
    done: false,
    image: Aklogo,
    resetTime: '18:00',
  },
])

</script>

<template>
  <Navbar />
  <router-view />

  <div class="container py-2">
    <p class="text-center mt-3">🕒 Current time: {{ formattedTime }} {{ formattedDateTime /*change this into at navbar*/ }}</p>

    <div class="row g-4">
      <div class="col-md-6" v-for="game in games" :key="game.name">
        <div
          class="card cursor-box zoom-in"
          :class="{ 'bg-success text-white': game.done }"
          @click="game.done = !game.done"
          style="cursor: pointer"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <img :src="game.image" class="img-fluid rounded" />
              </div>
              <div class="col-8">
                <h5 class="card-title fw-bold">{{ game.name }}</h5>
                <h6 class="mb-1">🔁 Reset at: {{ game.resetTime }}</h6>
                <p class="mb-0">⏳ Resets in: {{ getTimeUntilReset(game) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
