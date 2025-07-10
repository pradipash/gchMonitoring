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
  font-size: small;
}

.gradient-nav {
  /* fallback for old browsers */
  background: #c9d2e4;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to left, rgba(201, 210, 228, 1), rgba(249, 251, 253, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to left, rgba(201, 210, 228, 1), rgba(249, 251, 253, 1));
}
</style>

<template>
  <nav class="navbar gradient-nav navbar-expand-lg bg-body-tertiary mb-4 bb-2">
    <div class="container">
      <div class="d-flex flex-column align-items-start">
        <div class="navbar-brand fw-bold title mb-0" to="/">Gacha Reset Tracker</div>
        <span class="text-muted date-title" style="margin-top: -10px">{{ formattedDateTime }}</span>
      </div>
    </div>
  </nav>
</template>
