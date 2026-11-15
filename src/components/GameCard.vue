<script setup>
import { computed, ref, watch } from 'vue'
import {
  formatCountdown,
  formatDurationShort,
  formatLocalResetTime,
  formatServerResetTime,
  formatUtcOffset,
  isDone,
  msUntilReset,
  urgency,
} from '@/lib/reset'

const props = defineProps({
  game: { type: Object, required: true },
  now: { type: Date, required: true },
  draggable: { type: Boolean, default: true },
})

const emit = defineEmits(['toggle', 'edit'])

const imageFailed = ref(false)
watch(
  () => props.game.iconUrl,
  () => {
    imageFailed.value = false
  },
)

const done = computed(() => isDone(props.game, props.now))
const state = computed(() => urgency(props.game, props.now))
const remainingMs = computed(() => msUntilReset(props.game, props.now))
const countdown = computed(() => formatCountdown(remainingMs.value))
const shortLeft = computed(() => formatDurationShort(remainingMs.value))
const localReset = computed(() => formatLocalResetTime(props.game, props.now))
const serverReset = computed(() =>
  `${formatServerResetTime(props.game)} ${formatUtcOffset(props.game.utcOffsetMin)}`,
)

const initials = computed(() => {
  const words = (props.game.name || '?').trim().split(/\s+/)
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('')
})
</script>

<template>
  <li class="game-card" :class="[`state-${state}`, { 'has-drag': draggable }]">
    <span
      v-if="draggable"
      class="drag-handle"
      aria-hidden="true"
      title="Drag to reorder"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <circle cx="5.5" cy="3.5" r="1.3" />
        <circle cx="10.5" cy="3.5" r="1.3" />
        <circle cx="5.5" cy="8" r="1.3" />
        <circle cx="10.5" cy="8" r="1.3" />
        <circle cx="5.5" cy="12.5" r="1.3" />
        <circle cx="10.5" cy="12.5" r="1.3" />
      </svg>
    </span>

    <button
      type="button"
      class="card-toggle"
      :aria-pressed="done"
      @click="emit('toggle', game)"
    >
      <span class="icon-wrap" aria-hidden="true">
        <img
          v-if="game.iconUrl && !imageFailed"
          :src="game.iconUrl"
          alt=""
          class="game-icon"
          loading="lazy"
          @error="imageFailed = true"
        />
        <span v-else class="icon-fallback">{{ initials }}</span>
      </span>

      <span class="card-info">
        <span class="title-row">
          <span class="game-name">{{ game.name }}</span>
          <span v-if="game.server" class="server-tag">{{ game.server }}</span>
        </span>

        <span class="reset-line">
          Resets {{ localReset }} local
          <span class="server-sub">({{ serverReset }})</span>
        </span>

        <span class="status-row">
          <span class="countdown">{{ countdown }}</span>

          <span v-if="state === 'done'" class="status-badge is-done">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 10.5 8 14.5 16 6.5" />
            </svg>
            Done today
          </span>

          <span v-else-if="state === 'urgent'" class="status-badge is-urgent">
            Due in {{ shortLeft }}
          </span>

          <span v-else class="status-badge is-pending">
            Not done
          </span>
        </span>
      </span>
    </button>

    <button
      type="button"
      class="edit-btn"
      :aria-label="`Edit ${game.name}`"
      @click="emit('edit', game)"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="18"
        height="18"
        fill="currentColor"
      >
        <circle cx="4" cy="10" r="1.6" />
        <circle cx="10" cy="10" r="1.6" />
        <circle cx="16" cy="10" r="1.6" />
      </svg>
    </button>
  </li>
</template>

<style scoped>
.game-card {
  position: relative;
  display: flex;
  align-items: stretch;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 1rem;
  overflow: hidden;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease,
    box-shadow 0.15s ease;
}

.game-card:hover {
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
}

.game-card.state-urgent {
  background: var(--urgent-bg);
  border-color: var(--urgent-border);
}

.game-card.state-done {
  background: var(--done-bg);
  border-color: var(--done-border);
}

.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.5rem 0.25rem;
  color: var(--text-muted);
  cursor: grab;
  touch-action: pan-x;
  user-select: none;
}

.drag-handle:active {
  cursor: grabbing;
}

.card-toggle {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.95rem 0.5rem 0.95rem 0.95rem;
  border: 0;
  background: transparent;
  text-align: start;
  cursor: pointer;
}

.has-drag .card-toggle {
  padding-inline-start: 0.375rem;
}

.icon-wrap {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  background: var(--surface-subtle);
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 0.25rem;
}

.game-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon-fallback {
  font-weight: 800;
  font-size: 1.05rem;
  color: var(--text-muted);
}

.card-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
}

.game-name {
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.25;
  word-break: break-word;
}

.state-done .game-name {
  opacity: 0.88;
}

.server-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.45rem;
  border-radius: 999px;
  background: var(--surface-subtle);
  color: var(--text-muted);
}

.reset-line {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.server-sub {
  opacity: 0.85;
}

.status-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.15rem;
}

.countdown {
  font-variant-numeric: tabular-nums;
  font-size: 0.95rem;
  font-weight: 700;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}

.status-badge.is-done {
  background: color-mix(in srgb, var(--done-border) 18%, transparent);
  color: var(--done-text);
}

.status-badge.is-urgent {
  background: color-mix(in srgb, var(--urgent-border) 22%, transparent);
  color: var(--urgent-text);
}

.status-badge.is-pending {
  background: var(--surface-subtle);
  color: var(--text-muted);
}

.edit-btn {
  flex-shrink: 0;
  align-self: flex-start;
  min-inline-size: 3rem;
  min-block-size: 3rem;
  margin: 0.25rem 0.25rem 0 0;
  border: 0;
  border-radius: 0.625rem;
  background: transparent;
  color: var(--text-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.edit-btn:hover {
  background: color-mix(in srgb, var(--text) 8%, transparent);
  color: var(--text);
}
</style>
