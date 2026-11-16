<script setup>
import { computed, ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import AppHeader from '@/components/AppHeader.vue'
import GameCard from '@/components/GameCard.vue'
import GameEditorDialog from '@/components/GameEditorDialog.vue'
import { useAuth } from '@/composables/useAuth'
import { useGames } from '@/composables/useGames'
import { useNow } from '@/composables/useNow'
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
  toggleMute,
  toggleHidden,
  saveGame,
  deleteGame,
  reorderGames,
} = useGames(user)
const { now } = useNow()

const sortMode = ref('manual')
const editorRef = ref(null)
const savingEditor = ref(false)
const actionError = ref('')
const guestBannerDismissed = ref(false)

const visibleGames = computed(() => games.value.filter((g) => !g.hidden))
const hiddenGames = computed(() => games.value.filter((g) => g.hidden))
const doneCount = computed(() => visibleGames.value.filter((g) => isDone(g, now.value)).length)

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
    const combined = [...newVisibleOrder, ...hiddenGames.value]
    games.value = combined
    reorderGames(combined).catch((err) => {
      actionError.value = err?.message || 'Failed to save new order.'
    })
  },
})

async function handleToggle(game) {
  actionError.value = ''
  try {
    await toggleDone(game, now.value)
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
      @sign-in="signIn"
      @sign-out="signOut"
      @add-game="handleOpenCreate"
    />

    <main class="container dashboard-main">
      <div v-if="isGuest && !guestBannerDismissed" class="guest-banner">
        <p class="guest-text">
          <strong>Guest preview</strong> — your ticks are saved on this browser only. Sign in with
          Google to sync progress across PC &amp; Android and get Discord reminders.
        </p>
        <div class="guest-actions">
          <button type="button" class="btn btn-primary" :disabled="signingIn" @click="signIn">
            {{ signingIn ? 'Signing in…' : 'Sign in with Google' }}
          </button>
          <button
            type="button"
            class="btn guest-dismiss"
            aria-label="Dismiss guest notice"
            @click="guestBannerDismissed = true"
          >
            ✕
          </button>
        </div>
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

        <VueDraggable
          v-else-if="sortMode === 'manual'"
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
    </main>

    <GameEditorDialog
      ref="editorRef"
      :saving="savingEditor"
      @save="handleSave"
      @delete="handleDelete"
    />
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
  padding-block: 1.5rem 3rem;
}

.guest-banner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  background: var(--surface);
  border: 1px solid var(--border);
}

.guest-text {
  margin: 0;
  flex: 1 1 20rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.guest-text strong {
  color: var(--text);
}

.guest-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.guest-dismiss {
  min-inline-size: 2.75rem;
  padding-inline: 0.65rem;
}

.banner-error {
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--danger) 12%, var(--surface));
  color: var(--danger);
  border: 1px solid color-mix(in srgb, var(--danger) 35%, var(--border));
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
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  gap: 1rem;
}

:deep(.drag-ghost) {
  opacity: 0.45;
}
</style>
