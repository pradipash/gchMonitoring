<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const AUTO_DISMISS_MS = 10_000

const toasts = ref([])
const liveAnnouncement = ref('')
const popoverRef = ref(null)
const itemRefs = new Map()
const timers = new Map()
const hoveredOrFocused = new Set()

let nextToastId = 1
let previouslyFocused = null
let modalOpen = false
const deferredQueue = []
let modalObserver = null

function isModalOpen() {
  return typeof document !== 'undefined' && Boolean(document.querySelector('dialog[open]'))
}

function setItemRef(id, el) {
  if (el) {
    itemRefs.set(id, el)
  } else {
    itemRefs.delete(id)
  }
}

function syncPopoverVisibility() {
  const el = popoverRef.value
  if (!el) return
  if (toasts.value.length > 0) {
    if (!el.matches(':popover-open')) {
      try {
        el.showPopover()
      } catch {
        // Fallback for environments without native popover support
      }
    }
  } else if (el.matches(':popover-open')) {
    try {
      el.hidePopover()
    } catch {
      // Ignore
    }
  }
}

function announce(toast) {
  const msg = `${toast.title} — ${toast.detail}. Actions available.`
  if (typeof document !== 'undefined' && typeof document.ariaNotify === 'function') {
    document.ariaNotify(msg)
    return
  }
  liveAnnouncement.value = ''
  requestAnimationFrame(() => {
    liveAnnouncement.value = msg
  })
}

function clearDismissTimer(id) {
  const timer = timers.get(id)
  if (timer) {
    clearTimeout(timer)
    timers.delete(id)
  }
}

function scheduleDismiss(id) {
  clearDismissTimer(id)
  if (hoveredOrFocused.has(id)) return
  const timer = setTimeout(() => {
    if (!hoveredOrFocused.has(id)) {
      dismissToast(id, { manageFocus: false })
    }
  }, AUTO_DISMISS_MS)
  timers.set(id, timer)
}

function pushToast({ title, detail, onUndo }) {
  if (isModalOpen()) {
    deferredQueue.push({ title, detail, onUndo })
    return
  }

  const toast = {
    id: nextToastId++,
    title,
    detail,
    onUndo,
  }
  toasts.value = [...toasts.value, toast]
  announce(toast)
  nextTick(() => {
    syncPopoverVisibility()
    scheduleDismiss(toast.id)
  })
}

function dismissToast(id, { manageFocus = true } = {}) {
  clearDismissTimer(id)
  hoveredOrFocused.delete(id)

  const index = toasts.value.findIndex((t) => t.id === id)
  if (index === -1) return

  const cardEl = itemRefs.get(id)
  const hadFocus = manageFocus && cardEl?.contains(document.activeElement)

  toasts.value = toasts.value.filter((t) => t.id !== id)

  nextTick(() => {
    syncPopoverVisibility()
    if (!hadFocus) return
    const nextToast = toasts.value[index] ?? toasts.value[index - 1]
    if (nextToast) {
      const nextEl = itemRefs.get(nextToast.id)
      nextEl?.querySelector('button')?.focus()
    } else if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus()
      previouslyFocused = null
    }
  })
}

async function handleUndo(toast) {
  try {
    await toast.onUndo?.()
  } finally {
    dismissToast(toast.id, { manageFocus: true })
  }
}

function onToastFocusIn(id) {
  if (
    typeof document !== 'undefined' &&
    !popoverRef.value?.contains(document.activeElement) &&
    document.activeElement !== document.body
  ) {
    previouslyFocused = document.activeElement
  }
  hoveredOrFocused.add(id)
  clearDismissTimer(id)
}

function onToastFocusOut(id, event) {
  const cardEl = itemRefs.get(id)
  if (cardEl && event.relatedTarget && cardEl.contains(event.relatedTarget)) {
    return
  }
  hoveredOrFocused.delete(id)
  scheduleDismiss(id)
}

function onToastMouseEnter(id) {
  hoveredOrFocused.add(id)
  clearDismissTimer(id)
}

function onToastMouseLeave(id) {
  const cardEl = itemRefs.get(id)
  if (cardEl?.contains(document.activeElement)) return
  hoveredOrFocused.delete(id)
  scheduleDismiss(id)
}

function flushDeferred() {
  if (isModalOpen() || deferredQueue.length === 0) return
  while (deferredQueue.length > 0) {
    pushToast(deferredQueue.shift())
  }
}

if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
  modalObserver = new MutationObserver(() => {
    const nowOpen = isModalOpen()
    if (modalOpen && !nowOpen) {
      flushDeferred()
    }
    modalOpen = nowOpen
  })
  modalObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['open'],
    subtree: true,
  })
}

watch(
  () => toasts.value.length,
  () => {
    nextTick(syncPopoverVisibility)
  },
)

onBeforeUnmount(() => {
  for (const timer of timers.values()) clearTimeout(timer)
  timers.clear()
  modalObserver?.disconnect()
})

defineExpose({ pushToast })
</script>

<template>
  <div role="region" aria-label="Notifications" class="toast-region">
    <p class="visually-hidden">Screen reader announcements</p>
    <div class="visually-hidden" aria-live="polite">{{ liveAnnouncement }}</div>

    <div ref="popoverRef" popover="manual" class="toast-stack">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :ref="(el) => setItemRef(toast.id, el)"
        class="toast-card"
        @mouseenter="onToastMouseEnter(toast.id)"
        @mouseleave="onToastMouseLeave(toast.id)"
        @focusin="onToastFocusIn(toast.id)"
        @focusout="(e) => onToastFocusOut(toast.id, e)"
      >
        <span class="toast-dot" aria-hidden="true"></span>
        <div class="toast-body">
          <p class="toast-title">{{ toast.title }}</p>
          <p v-if="toast.detail" class="toast-detail">{{ toast.detail }}</p>
        </div>
        <div class="toast-actions">
          <button
            v-if="toast.onUndo"
            type="button"
            class="btn toast-undo"
            @click="handleUndo(toast)"
          >
            Undo
          </button>
          <button
            type="button"
            class="toast-close"
            aria-label="Dismiss notification"
            @click="dismissToast(toast.id)"
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-stack {
  position: fixed;
  inset: auto 1rem 1rem auto;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  width: min(calc(100vw - 2rem), 24rem);
  overflow: visible;

  opacity: 0;
  transition-property: opacity, transform, display, overlay;
  transition-duration: 0.2s;
  transition-timing-function: var(--ease-out);
  transition-behavior: allow-discrete;
}

@media (prefers-reduced-motion: no-preference) {
  .toast-stack {
    transform: translateY(8px);
  }
}

.toast-stack:is(:popover-open, .\:popover-open) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 1;

  @starting-style {
    opacity: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    transform: translateY(0);

    @starting-style {
      transform: translateY(8px);
    }
  }
}

@media (max-width: 639px) {
  .toast-stack {
    inset: auto 0.75rem calc(4.75rem + env(safe-area-inset-bottom, 0px)) 0.75rem;
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .toast-stack {
    transition-duration: 0.08s;
  }
}

.toast-card {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 0.625rem 0.625rem 0.875rem;
  border-radius: 0.75rem;
  background: var(--surface);
  border: 1px solid var(--done-border);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
  color: var(--text);
}

.toast-dot {
  flex-shrink: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--done-text);
}

.toast-body {
  flex: 1;
  min-width: 0;
}

.toast-title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3;
}

.toast-detail {
  margin: 0.125rem 0 0;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.toast-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.toast-undo {
  min-block-size: max(2rem, var(--target-size));
  padding: 0.25rem 0.65rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent);
}

.toast-close {
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

.toast-close:hover {
  background: var(--surface-raised);
  color: var(--text);
}
</style>
