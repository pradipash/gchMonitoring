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

const { formattedTime } = useNow()
const { preference, cycleTheme } = useTheme()

const copiedUid = ref(false)
let copyTimer = null

const syncState = computed(() => {
  if (!props.user) return { key: 'guest', label: 'Guest' }
  if (props.offline) return { key: 'offline', label: 'Offline' }
  if (props.syncing) return { key: 'syncing', label: 'Syncing…' }
  return { key: 'synced', label: 'Synced' }
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
      <div class="header-row">
        <div class="brand">
          <h1>Gacha Reset</h1>
          <div class="meta-line">
            <span class="clock">{{ formattedTime }}</span>
            <template v-if="totalCount > 0">
              <span class="sep" aria-hidden="true">·</span>
              <span class="progress-text">{{ doneCount }}/{{ totalCount }} done</span>
            </template>
            <span class="sep" aria-hidden="true">·</span>
            <span class="sync-status" :class="`is-${syncState.key}`">
              <span class="status-dot" aria-hidden="true"></span>
              {{ syncState.label }}
            </span>
          </div>
        </div>

        <div class="header-actions">
          <button
            type="button"
            class="btn header-icon-btn"
            :aria-label="themeMeta.aria"
            :title="themeMeta.label"
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
              stroke-width="1.5"
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
              stroke-width="1.5"
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8m-4-4v4" />
            </svg>
            <span class="desktop-only">{{ themeMeta.label }}</span>
          </button>

          <button
            v-if="!user"
            type="button"
            class="btn btn-primary header-icon-btn"
            :disabled="signingIn"
            @click="emit('sign-in')"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            <span>{{ signingIn ? 'Signing in…' : 'Sign in' }}</span>
          </button>

          <template v-else>
            <button
              type="button"
              class="btn header-icon-btn"
              popovertarget="account-popover"
              aria-label="Account menu"
            >
              <img
                v-if="user.photoURL"
                :src="user.photoURL"
                alt=""
                width="20"
                height="20"
                class="avatar"
                referrerpolicy="no-referrer"
              />
              <svg
                v-else
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c1.6-3.5 4.8-5 8-5s6.4 1.5 8 5" />
              </svg>
              <span class="desktop-only">{{ user.displayName?.split(' ')[0] || 'Account' }}</span>
            </button>

            <div id="account-popover" popover="auto" class="account-popover">
              <div class="account-info">
                <strong>{{ user.displayName || 'Signed in' }}</strong>
                <span class="account-email">{{ user.email }}</span>
              </div>

              <details class="uid-details">
                <summary>Worker UID</summary>
                <div class="uid-row">
                  <code class="uid-code">{{ user.uid }}</code>
                  <button type="button" class="btn btn-compact" @click="copyUid">
                    {{ copiedUid ? 'Copied' : 'Copy' }}
                  </button>
                </div>
                <span class="visually-hidden" aria-live="polite">
                  {{ copiedUid ? 'User ID copied to clipboard' : '' }}
                </span>
              </details>

              <button type="button" class="btn btn-danger signout-btn" @click="emit('sign-out')">
                Sign out
              </button>
            </div>
          </template>
        </div>
      </div>

      <div class="desktop-toolbar">
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
            Soonest
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
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span>Add game</span>
        </button>
      </div>
    </div>
  </header>

  <nav class="mobile-bottom-bar" aria-label="View controls">
    <div class="mobile-bar-inner">
      <div class="sort-group mobile-sort-group" role="group" aria-label="Game list view">
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
          Soonest
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

      <button type="button" class="btn btn-primary mobile-add-btn" @click="emit('add-game')">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span>Add</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.app-header {
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding-block: 0.625rem;
  padding-top: max(0.625rem, env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-block-size: 2.75rem;
}

.brand {
  min-width: 0;
}

h1 {
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.meta-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.125rem;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.clock {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  color: var(--text-secondary);
}

.sep {
  opacity: 0.6;
}

.sync-status {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 500;
}

.status-dot {
  width: 0.4375rem;
  height: 0.4375rem;
  border-radius: 999px;
  background: currentColor;
}

.sync-status.is-synced {
  color: var(--done-text);
}

.sync-status.is-syncing {
  color: var(--accent);
}

.sync-status.is-offline {
  color: var(--urgent-text);
}

.sync-status.is-guest {
  color: var(--text-muted);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.header-icon-btn {
  padding-inline: 0.65rem;
  min-block-size: max(2.25rem, var(--target-size));
  min-inline-size: max(2.25rem, var(--target-size));
}

.avatar {
  border-radius: 999px;
  object-fit: cover;
}

.desktop-toolbar {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.sort-group {
  display: inline-flex;
  padding: 0.2rem;
  border-radius: 0.5rem;
  background: var(--surface-raised);
  border: 1px solid var(--border);
}

.sort-btn {
  min-block-size: 2.125rem;
  padding: 0.25rem 0.65rem;
  border: 0;
  border-radius: 0.375rem;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.15s var(--ease-out),
    color 0.15s var(--ease-out);
}

.sort-btn[aria-pressed='true'] {
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
}

.mobile-bottom-bar {
  position: fixed;
  inset: auto 0 0 0;
  z-index: 20;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border);
  padding: 0.5rem max(0.75rem, env(safe-area-inset-right, 0px))
    max(0.625rem, env(safe-area-inset-bottom, 0px)) max(0.75rem, env(safe-area-inset-left, 0px));
}

.mobile-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  max-width: 64rem;
  margin-inline: auto;
}

.mobile-sort-group {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mobile-sort-group .sort-btn {
  min-block-size: 2.5rem;
  padding-inline: 0.35rem;
  font-size: 0.78rem;
}

.mobile-add-btn {
  flex-shrink: 0;
  min-block-size: 2.75rem;
  padding-inline: 0.875rem;
}

/* Account popover: anchor-positioned with progressive fallback */
.account-popover {
  width: min(calc(100vw - 1.5rem), 20rem);
  padding: 1rem;
  border-radius: 0.875rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
}

.account-popover:is(:popover-open, .\:popover-open) {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@supports (position-area: block-end) {
  .account-popover {
    inset: auto;
    margin: 0.375rem 0 0;
    position-area: block-end span-inline-start;
    position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
  }
}

@supports not (position-area: block-end) {
  .account-popover {
    position: fixed;
    inset: 3.75rem 1rem auto auto;
    margin: 0;
  }

  @media (max-width: 639px) {
    .account-popover {
      inset: auto 0.75rem calc(4.75rem + env(safe-area-inset-bottom, 0px)) 0.75rem;
      width: auto;
    }
  }
}

.account-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.account-email {
  color: var(--text-muted);
  font-size: 0.8125rem;
  word-break: break-all;
}

.uid-details {
  border-radius: 0.5rem;
  background: var(--surface-raised);
  border: 1px solid var(--border);
  padding: 0.5rem 0.625rem;
}

.uid-details summary {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  min-block-size: 1.75rem;
  display: flex;
  align-items: center;
}

.uid-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.uid-code {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-compact {
  min-block-size: 2rem;
  min-inline-size: 3.5rem;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
}

.signout-btn {
  width: 100%;
}

.desktop-only {
  display: none;
}

@media (min-width: 640px) {
  .app-header {
    padding-block: 0.875rem;
  }

  h1 {
    font-size: 1.25rem;
  }

  .desktop-only {
    display: inline;
  }

  .desktop-toolbar {
    display: flex;
  }

  .mobile-bottom-bar {
    display: none;
  }
}
</style>
