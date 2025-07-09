<script setup>
import { useTime } from '../services/useTime.js'

const { formattedDateTime } = useTime()
</script>

<style scoped>
.title {
  font-family: 'Merriweather', serif;
  font-size: 30px;
  font-weight: 900;
}

.date-title {
  font-size: medium;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand fw-bold me-3 title" to="/"
          >Placeholder Tracker</router-link
        >
        <span class="text-muted mx-4 date-title">{{ formattedDateTime }}</span>
      </div>
      <div class="d-flex gap-2">
        <router-link class="btn btn-outline-primary" to="/">Home</router-link>
      </div>
    </div>
  </nav>
</template>
