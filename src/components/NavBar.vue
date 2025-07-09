<script setup>
import { useTime } from '../services/useTime.js'

const { formattedDateTime } = useTime()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand fw-bold me-3" to="/">Placeholder Tracker</router-link>
        <span class="text-muted">{{ formattedDateTime }}</span>
      </div>
      <div class="d-flex gap-2">
        <router-link class="btn btn-outline-primary" to="/">Home</router-link>
      </div>
    </div>
  </nav>
</template>
