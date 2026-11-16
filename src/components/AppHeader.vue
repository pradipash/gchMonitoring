<script setup>
import { computed, ref } from 'vue'
import { useNow } from '@/composables/useNow'
import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  user: { type: Object, default: null },
  signingIn: { type: Boolean, default: false },
  sortMode: { type: String, required: true },
  syncing: { type: Boolean, default: false },
  offline: { type: Boolean, default: false },
  doneCount: { type: Number, default: 0 },
  totalCount: { type: Number, default: 0 },
  hiddenCount: { type: Number, default: 0 },
})

const emit = defineEmits(['update:sortMode', 'sign-in', 'sign-out', 'add-game'])

const { formattedDate, formattedTime } = useNow()
const { preference, cycleTheme } = useTheme()

const copiedUid = ref(false)
let copyTimer = null

const syncLabel = computed(() => {
  if (!props.user) return 'Guest mode'
  if (props.offline) return 'Offline cache'
  if (props.syncing) return 'Syncing…'
  return 'Synced'
})

const themeMeta = computed(() => {
  if (preference.value === 'light') {
    return { label: 'Light', aria: 'Color theme: Light. Switch to Dark.' }
  }
  if (preference.value === 'dark') {
    return { label: 'Dark', aria: 'Color theme: Dark. Switch to System.' }
  }
  return { label: 'System', aria: 'Color theme: System. Switch to Light.' }
})

async function copyUid() {
  if (!props.user?.uid) return
  try {
    await navigator.clipboard.writeText(props.user.uid)
    copiedUid.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copiedUid.value = false
    }, 2000)
  } catch {
    copiedUid.value = false
  }
}
</script>

<template>
  <header class="app-header">
    <div class="container header-inner">
      <div class="header-top">
        <div class="brand">
          <h1>Gacha Reset Tracker</h1>
          <div class="meta-row">
            <span class="clock">{{ formattedDate }} · {{ formattedTime }}</span>
            <span class="dot" aria-hidden="true">•</span>
            <span
              class="sync-pill"
              :class="{
                'is-guest': !user,
                'is-offline': user && offline,
                'is-syncing': user && syncing,
              }"
            >
              {{ syncLabel }}
            </span>
            <span v-if="totalCount > 0" class="dot" aria-hidden="true">•</span>
            <span v-if="totalCount > 0" class="progress-text">
              {{ doneCount }}/{{ totalCount }} done
            </span>
          </div>
        </div>

        <div class="header-actions">
          <button
            type="button"
            class="btn icon-btn"
            :aria-label="themeMeta.aria"
            @click="cycleTheme"
          >
            <svg
              v-if="preference === 'light'"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              />
            </svg>
            <svg
              v-else-if="preference === 'dark'"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <svg
              v-else
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8m-4-4v4" />
            </svg>
            <span class="btn-label">{{ themeMeta.label }}</span>
          </button>

          <button
            v-if="!user"
            type="button"
            class="btn btn-primary icon-btn"
            :disabled="signingIn"
            @click="emit('sign-in')"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
              />
            </svg>
            <span>{{ signingIn ? 'Signing in…' : 'Sign in' }}</span>
          </button>

          <template v-else>
            <button
              type="button"
              class="btn icon-btn"
              popovertarget="account-popover"
              aria-label="Account menu"
            >
              <img
                v-if="user.photoURL"
                :src="user.photoURL"
                alt=""
                width="22"
                height="22"
                class="avatar"
                referrerpolicy="no-referrer"
              />
              <span class="btn-label">{{ user.displayName?.split(' ')[0] || 'Account' }}</span>
            </button>

            <div id="account-popover" popover class="account-popover">
              <div class="account-info">
                <strong>{{ user.displayName || 'Signed in' }}</strong>
                <span class="account-email">{{ user.email }}</span>
              </div>

              <div class="uid-box">
                <span class="uid-label">Your UID (for reminder worker)</span>
                <div class="uid-row">
                  <code class="uid-code">{{ user.uid }}</code>
                  <button type="button" class="btn btn-compact" @click="copyUid">
                    {{ copiedUid ? 'Copied' : 'Copy' }}
                  </button>
                </div>
                <span class="visually-hidden" aria-live="polite">
                  {{ copiedUid ? 'User ID copied to clipboard' : '' }}
                </span>
              </div>

              <button type="button" class="btn btn-danger signout-btn" @click="emit('sign-out')">
                Sign out
              </button>
            </div>
          </template>
        </div>
      </div>

      <div class="toolbar">
        <div class="sort-group" role="group" aria-label="Game list view">
          <button
            type="button"
            class="sort-btn"
            :aria-pressed="sortMode === 'manual'"
            @click="emit('update:sortMode', 'manual')"
          >
            My order
          </button>
          <button
            type="button"
            class="sort-btn"
            :aria-pressed="sortMode === 'soonest'"
            @click="emit('update:sortMode', 'soonest')"
          >
            Soonest reset
          </button>
          <button
            type="button"
            class="sort-btn"
            :aria-pressed="sortMode === 'hidden'"
            @click="emit('update:sortMode', 'hidden')"
          >
            Hidden<template v-if="hiddenCount > 0"> ({{ hiddenCount }})</template>
          </button>
        </div>

        <button type="button" class="btn btn-primary" @click="emit('add-game')">
          <span aria-hidden="true">+</span>
          <span>Add game</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding-block: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.header-top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

h1 {
  margin: 0;
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.clock {
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}

.sync-pill {
  font-weight: 600;
  color: var(--done-text);
}

.sync-pill.is-guest {
  color: var(--text-muted);
}

.sync-pill.is-syncing {
  color: var(--accent);
}

.sync-pill.is-offline {
  color: var(--urgent-text);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-btn {
  padding-inline: 0.75rem;
  font-size: 0.875rem;
}

.avatar {
  border-radius: 999px;
  object-fit: cover;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.sort-group {
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0.2rem;
  border-radius: 0.625rem;
  background: var(--surface-subtle);
  border: 1px solid var(--border);
}

.sort-btn {
  min-block-size: 2.35rem;
  padding: 0.3rem 0.75rem;
  border: 0;
  border-radius: 0.45rem;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.sort-btn[aria-pressed='true'] {
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
}

.account-popover {
  position: fixed;
  inset: 4.5rem 1rem auto auto;
  margin: 0;
  width: min(calc(100vw - 2rem), 21rem);
  padding: 1rem;
  border-radius: 0.875rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.22);
}

.account-popover:is(:popover-open, .\:popover-open) {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.account-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.account-email {
  color: var(--text-muted);
  font-size: 0.85rem;
  word-break: break-all;
}

.uid-box {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  background: var(--surface-subtle);
}

.uid-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

.uid-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.uid-code {
  flex: 1;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-compact {
  min-block-size: 2rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.8rem;
}

.signout-btn {
  width: 100%;
}

@media (max-width: 520px) {
  .btn-label {
    display: none;
  }
}
</style>
