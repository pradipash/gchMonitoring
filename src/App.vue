<script setup>
import { computed, ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import AppHeader from '@/components/AppHeader.vue'
import AutoCheckToast from '@/components/AutoCheckToast.vue'
import GameCard from '@/components/GameCard.vue'
import GameEditorDialog from '@/components/GameEditorDialog.vue'
import { useAuth } from '@/composables/useAuth'
import { useGames } from '@/composables/useGames'
import { useNow } from '@/composables/useNow'
import { useProcessWatcher } from '@/composables/useProcessWatcher'
import { isDone, msUntilReset } from '@/lib/reset'

const { user, authReady, authError, signingIn, signIn, signOut } = useAuth()
const {
  games,
  isGuest,
  loading,
  syncing,
  offline,
  error,
  toggleDone,
  markDone,
  markNotDone,
  toggleMute,
  toggleHidden,
  saveGame,
  deleteGame,
  reorderGames,
} = useGames(user)
const { now } = useNow()

const sortMode = ref('manual')
const editorRef = ref(null)
const toastRef = ref(null)
const savingEditor = ref(false)
const actionError = ref('')
const guestBannerDismissed = ref(false)

const {
  enabled: watcherEnabled,
  browserNotifEnabled,
  notifPermission,
  status: watcherStatus,
  pendingMatches: watcherPending,
  setEnabled: setWatcherEnabled,
  setBrowserNotifEnabled,
  suppressForCycle,
} = useProcessWatcher({
  games,
  now,
  onAutoCheck: async (game, entry) => {
    await markDone(game, now.value)
    const detectedLabel =
      entry.title && entry.title.toLowerCase() !== entry.process.toLowerCase()
        ? entry.title
        : entry.process
    toastRef.value?.pushToast({
      title: `${game.name} auto-checked`,
      detail: `Detected ${detectedLabel}`,
      onUndo: async () => {
        suppressForCycle(game, now.value)
        await markNotDone(game)
      },
    })
  },
})

const visibleGames = computed(() => games.value.filter((g) => !g.hidden))
const hiddenGames = computed(() => games.value.filter((g) => g.hidden))
const doneCount = computed(() => visibleGames.value.filter((g) => isDone(g, now.value)).length)
const allDone = computed(
  () => visibleGames.value.length > 0 && doneCount.value === visibleGames.value.length,
)

const sortedVisibleGames = computed(() => {
  if (sortMode.value === 'manual') {
    return visibleGames.value
  }
  return [...visibleGames.value].sort((a, b) => {
    const aDone = isDone(a, now.value)
    const bDone = isDone(b, now.value)
    if (aDone !== bDone) return aDone ? 1 : -1
    return msUntilReset(a, now.value) - msUntilReset(b, now.value)
  })
})

const draggableGames = computed({
  get: () => visibleGames.value,
  set: (newVisibleOrder) => {
    const previousGames = [...games.value]
    const combined = [...newVisibleOrder, ...hiddenGames.value]
    games.value = combined
    reorderGames(combined).catch((err) => {
      games.value = previousGames
      actionError.value = err?.message || 'Failed to save new order.'
    })
  },
})

async function handleToggle(game) {
  actionError.value = ''
  const wasDone = isDone(game, now.value)
  try {
    await toggleDone(game, now.value)
    if (wasDone) {
      suppressForCycle(game, now.value)
    }
  } catch (err) {
    actionError.value = err?.message || 'Could not update game status.'
  }
}

async function handleToggleMute(game) {
  actionError.value = ''
  try {
    await toggleMute(game)
  } catch (err) {
    actionError.value = err?.message || 'Could not update alert setting.'
  }
}

async function handleToggleHidden(game) {
  actionError.value = ''
  try {
    await toggleHidden(game)
  } catch (err) {
    actionError.value = err?.message || 'Could not update hidden setting.'
  }
}

function handleOpenCreate() {
  editorRef.value?.openForCreate()
}

function handleOpenEdit(game) {
  editorRef.value?.openForEdit(game)
}

async function handleSave({ id, data, done, fail }) {
  savingEditor.value = true
  try {
    await saveGame(id, data)
    done()
  } catch (err) {
    fail(err?.message || 'Failed to save game.')
  } finally {
    savingEditor.value = false
  }
}

async function handleDelete({ id, done, fail }) {
  savingEditor.value = true
  try {
    await deleteGame(id)
    done()
  } catch (err) {
    fail(err?.message || 'Failed to delete game.')
  } finally {
    savingEditor.value = false
  }
}
</script>

<template>
  <div v-if="!authReady" class="boot-screen">
    <p>Loading…</p>
  </div>

  <template v-else>
    <AppHeader
      v-model:sort-mode="sortMode"
      :user="user"
      :signing-in="signingIn"
      :syncing="syncing"
      :offline="offline"
      :done-count="doneCount"
      :total-count="visibleGames.length"
      :hidden-count="hiddenGames.length"
      :watcher-enabled="watcherEnabled"
      :watcher-status="watcherStatus"
      :watcher-pending="watcherPending"
      :browser-notif-enabled="browserNotifEnabled"
      :notif-permission="notifPermission"
      @sign-in="signIn"
      @sign-out="signOut"
      @add-game="handleOpenCreate"
      @toggle-watcher="setWatcherEnabled"
      @toggle-browser-notif="setBrowserNotifEnabled"
    />

    <main class="container dashboard-main">
      <div v-if="isGuest && !guestBannerDismissed" class="guest-strip">
        <p class="guest-text">
          Guest mode · saved on this browser.
          <button
            type="button"
            class="guest-link"
            :disabled="signingIn"
            @click="signIn"
          >
            {{ signingIn ? 'Signing in…' : 'Sign in to sync' }}
          </button>
        </p>
        <button
          type="button"
          class="guest-dismiss"
          aria-label="Dismiss guest notice"
          @click="guestBannerDismissed = true"
        >
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
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <p v-if="authError || error || actionError" class="banner-error" role="alert">
        {{ authError || error || actionError }}
      </p>

      <p v-if="loading" class="empty-state">Syncing your games…</p>

      <template v-else-if="sortMode === 'hidden'">
        <div v-if="hiddenGames.length === 0" class="empty-state">
          <p>No hidden games. Open ⋯ on any card to hide games you are taking a break from.</p>
        </div>

        <ul v-else role="list" class="game-grid">
          <GameCard
            v-for="game in hiddenGames"
            :key="game.id"
            :game="game"
            :now="now"
            :draggable="false"
            @toggle="handleToggle"
            @edit="handleOpenEdit"
            @toggle-mute="handleToggleMute"
            @toggle-hidden="handleToggleHidden"
          />
        </ul>
      </template>

      <template v-else>
        <div v-if="visibleGames.length === 0" class="empty-state">
          <p v-if="hiddenGames.length > 0">All your tracked games are currently hidden.</p>
          <p v-else>No games tracked yet.</p>
          <div class="empty-actions">
            <button
              v-if="hiddenGames.length > 0"
              type="button"
              class="btn"
              @click="sortMode = 'hidden'"
            >
              View hidden ({{ hiddenGames.length }})
            </button>
            <button type="button" class="btn btn-primary" @click="handleOpenCreate">
              Add a game
            </button>
          </div>
        </div>

        <template v-else>
          <p v-if="allDone" class="all-done-note">All dailies done for today.</p>

          <VueDraggable
            v-if="sortMode === 'manual'"
            v-model="draggableGames"
            tag="ul"
            role="list"
            class="game-grid"
            handle=".drag-handle"
            :animation="180"
            ghost-class="drag-ghost"
          >
            <GameCard
              v-for="game in draggableGames"
              :key="game.id"
              :game="game"
              :now="now"
              :draggable="true"
              @toggle="handleToggle"
              @edit="handleOpenEdit"
              @toggle-mute="handleToggleMute"
              @toggle-hidden="handleToggleHidden"
            />
          </VueDraggable>

          <ul v-else role="list" class="game-grid">
            <GameCard
              v-for="game in sortedVisibleGames"
              :key="game.id"
              :game="game"
              :now="now"
              :draggable="false"
              @toggle="handleToggle"
              @edit="handleOpenEdit"
              @toggle-mute="handleToggleMute"
              @toggle-hidden="handleToggleHidden"
            />
          </ul>
        </template>
      </template>
    </main>

    <GameEditorDialog
      ref="editorRef"
      :saving="savingEditor"
      @save="handleSave"
      @delete="handleDelete"
    />

    <AutoCheckToast ref="toastRef" />
  </template>
</template>

<style scoped>
.boot-screen {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  color: var(--text-muted);
}

.dashboard-main {
  padding-block: 1rem 2.5rem;
}

@media (max-width: 639px) {
  .dashboard-main {
    padding-bottom: calc(5.25rem + env(safe-area-inset-bottom, 0px));
  }
}

.guest-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
  padding: 0.375rem 0.5rem 0.375rem 0.75rem;
  border-radius: 0.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
}

.guest-text {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--text-secondary);
}

.guest-link {
  border: 0;
  background: transparent;
  padding: 0.25rem;
  margin-inline-start: 0.25rem;
  color: var(--accent);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.guest-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.guest-dismiss {
  flex-shrink: 0;
  min-inline-size: max(2rem, var(--target-size));
  min-block-size: max(2rem, var(--target-size));
  border: 0;
  border-radius: 0.375rem;
  background: transparent;
  color: var(--text-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.guest-dismiss:hover {
  background: var(--surface-raised);
  color: var(--text);
}

.banner-error {
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--danger) 12%, var(--surface));
  color: var(--danger);
  border: 1px solid color-mix(in srgb, var(--danger) 35%, var(--border));
  font-size: 0.875rem;
}

.all-done-note {
  margin: 0 0 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--done-text);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
}

.empty-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.game-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 21.5rem), 1fr));
  gap: 0.75rem;
}

:deep(.drag-ghost) {
  opacity: 0.45;
}
</style>
