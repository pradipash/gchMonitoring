<script setup>
import { computed, ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import AppHeader from '@/components/AppHeader.vue'
import GameCard from '@/components/GameCard.vue'
import GameEditorDialog from '@/components/GameEditorDialog.vue'
import SignInScreen from '@/components/SignInScreen.vue'
import { useAuth } from '@/composables/useAuth'
import { useGames } from '@/composables/useGames'
import { useNow } from '@/composables/useNow'
import { isDone, msUntilReset } from '@/lib/reset'

const { user, authReady, authError, signingIn, signIn, signOut } = useAuth()
const { games, loading, syncing, offline, error, toggleDone, saveGame, deleteGame, reorderGames } =
  useGames(user)
const { now } = useNow()

const sortMode = ref('manual')
const editorRef = ref(null)
const savingEditor = ref(false)
const actionError = ref('')

const doneCount = computed(() => games.value.filter((g) => isDone(g, now.value)).length)

const sortedGames = computed(() => {
  if (sortMode.value === 'manual') {
    return games.value
  }
  return [...games.value].sort((a, b) => {
    const aDone = isDone(a, now.value)
    const bDone = isDone(b, now.value)
    if (aDone !== bDone) return aDone ? 1 : -1
    return msUntilReset(a, now.value) - msUntilReset(b, now.value)
  })
})

const draggableGames = computed({
  get: () => games.value,
  set: (newOrder) => {
    games.value = newOrder
    reorderGames(newOrder).catch((err) => {
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

  <SignInScreen v-else-if="!user" :signing-in="signingIn" :error="authError" @sign-in="signIn" />

  <template v-else>
    <AppHeader
      v-model:sort-mode="sortMode"
      :user="user"
      :syncing="syncing"
      :offline="offline"
      :done-count="doneCount"
      :total-count="games.length"
      @sign-out="signOut"
      @add-game="handleOpenCreate"
    />

    <main class="container dashboard-main">
      <p v-if="error || actionError" class="banner-error" role="alert">
        {{ error || actionError }}
      </p>

      <p v-if="loading" class="empty-state">Syncing your games…</p>

      <div v-else-if="games.length === 0" class="empty-state">
        <p>No games tracked yet.</p>
        <button type="button" class="btn btn-primary" @click="handleOpenCreate">
          Add your first game
        </button>
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
        />
      </VueDraggable>

      <ul v-else role="list" class="game-grid">
        <GameCard
          v-for="game in sortedGames"
          :key="game.id"
          :game="game"
          :now="now"
          :draggable="false"
          @toggle="handleToggle"
          @edit="handleOpenEdit"
        />
      </ul>
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
