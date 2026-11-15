<script setup>
import { useTheme } from '@/composables/useTheme'

defineProps({
  signingIn: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const emit = defineEmits(['sign-in'])
const { preference, cycleTheme } = useTheme()

const themeLabels = {
  system: 'Theme: System',
  light: 'Theme: Light',
  dark: 'Theme: Dark',
}
</script>

<template>
  <div class="signin-shell">
    <div class="signin-topbar">
      <button type="button" class="btn btn-quiet" @click="cycleTheme">
        {{ themeLabels[preference] }}
      </button>
    </div>

    <main class="signin-main">
      <section class="signin-card">
        <img
          src="/pwa-192.png"
          alt=""
          width="64"
          height="64"
          class="signin-logo"
        />
        <h1>Gacha Reset Tracker</h1>
        <p class="signin-desc">
          Track daily server resets, mark games done across PC and Android, and get Discord
          reminders before reset if you haven't played yet.
        </p>

        <p v-if="error" class="signin-error" role="alert">
          {{ error }}
        </p>

        <button
          type="button"
          class="btn btn-primary signin-btn"
          :disabled="signingIn"
          @click="emit('sign-in')"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
            />
          </svg>
          <span>{{ signingIn ? 'Signing in…' : 'Sign in with Google' }}</span>
        </button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.signin-shell {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.signin-topbar {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.signin-main {
  flex: 1;
  display: grid;
  place-items: center;
  padding: 1rem 1rem 3rem;
}

.signin-card {
  width: min(100%, 26rem);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
}

.signin-logo {
  border-radius: 1rem;
  margin-bottom: 1rem;
}

h1 {
  margin: 0 0 0.75rem;
  font-size: 1.625rem;
  line-height: 1.2;
}

.signin-desc {
  margin: 0 0 1.5rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.signin-error {
  margin: 0 0 1rem;
  padding: 0.75rem;
  border-radius: 0.625rem;
  background: color-mix(in srgb, var(--danger) 12%, var(--surface));
  color: var(--danger);
  font-size: 0.9rem;
  text-align: start;
}

.signin-btn {
  width: 100%;
  min-block-size: 3rem;
}

.btn-quiet {
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
}
</style>
