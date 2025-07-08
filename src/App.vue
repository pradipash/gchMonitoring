<script setup>
import { ref } from 'vue'

const isDone = ref(false)
</script>

<template>
  <header>
    <h1>Muh Games Tracker</h1>
  </header>

  <div>
    <label>
      <p>{{ isDone ? 'Done!' : 'Not Yet!' }}</p>
    </label>
  </div>
</template>
