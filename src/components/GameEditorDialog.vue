<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { DEFAULT_REMIND_BEFORE_MIN, formatUtcOffset } from '@/lib/reset'

defineProps({
  saving: { type: Boolean, default: false },
})

const emit = defineEmits(['save', 'delete'])

const BASE = import.meta.env?.BASE_URL ?? '/gchMonitoring/'

const ICON_PRESETS = [
  { id: 'ba', label: 'Blue Archive', url: `${BASE}icons/ba.png` },
  { id: 'zzz', label: 'Zenless Zone Zero', url: `${BASE}icons/zzz.png` },
  { id: 'ak', label: 'Arknights', url: `${BASE}icons/ak.png` },
  { id: 'gfl2', label: 'Girls Frontline 2', url: `${BASE}icons/gfl2.png` },
]

const BASE_TIMEZONES = [
  -720, -660, -600, -540, -480, -420, -360, -300, -240, -210, -180, -120, -60, 0, 60, 120, 180,
  210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 540, 570, 600, 660, 720, 780, 840,
]

const BASE_LEAD_TIMES = [
  { value: 15, label: '15 minutes before' },
  { value: 30, label: '30 minutes before' },
  { value: 60, label: '1 hour before' },
  { value: 120, label: '2 hours before (default)' },
  { value: 180, label: '3 hours before' },
  { value: 240, label: '4 hours before' },
  { value: 360, label: '6 hours before' },
  { value: 720, label: '12 hours before' },
]

const dialogRef = ref(null)
const nameInputRef = ref(null)
const editingId = ref(null)
const confirmingDelete = ref(false)
const formError = ref('')
const previewError = ref(false)

const form = reactive({
  name: '',
  server: '',
  iconUrl: '',
  resetTime: '04:00',
  utcOffsetMin: 480,
  remindBeforeMin: DEFAULT_REMIND_BEFORE_MIN,
  remindersEnabled: true,
  hidden: false,
})

const isEditing = computed(() => Boolean(editingId.value))

const timezoneOptions = computed(() => {
  const values = BASE_TIMEZONES.includes(form.utcOffsetMin)
    ? BASE_TIMEZONES
    : [...BASE_TIMEZONES, form.utcOffsetMin].sort((a, b) => a - b)
  return values.map((min) => ({ value: min, label: formatUtcOffset(min) }))
})

const leadTimeOptions = computed(() => {
  if (BASE_LEAD_TIMES.some((o) => o.value === form.remindBeforeMin)) {
    return BASE_LEAD_TIMES
  }
  return [
    ...BASE_LEAD_TIMES,
    { value: form.remindBeforeMin, label: `${form.remindBeforeMin} minutes before` },
  ].sort((a, b) => a.value - b.value)
})

function resetForm(game = null) {
  editingId.value = game?.id ?? null
  confirmingDelete.value = false
  formError.value = ''
  previewError.value = false

  if (game) {
    const hh = String(game.resetHour ?? 4).padStart(2, '0')
    const mm = String(game.resetMinute ?? 0).padStart(2, '0')
    form.name = game.name ?? ''
    form.server = game.server ?? ''
    form.iconUrl = game.iconUrl ?? ''
    form.resetTime = `${hh}:${mm}`
    form.utcOffsetMin = game.utcOffsetMin ?? 480
    form.remindBeforeMin = game.remindBeforeMin ?? DEFAULT_REMIND_BEFORE_MIN
    form.remindersEnabled = game.remindersEnabled ?? true
    form.hidden = Boolean(game.hidden)
  } else {
    form.name = ''
    form.server = ''
    form.iconUrl = ''
    form.resetTime = '04:00'
    form.utcOffsetMin = 480
    form.remindBeforeMin = DEFAULT_REMIND_BEFORE_MIN
    form.remindersEnabled = true
    form.hidden = false
  }
}

function selectPreset(url) {
  form.iconUrl = url
  previewError.value = false
}

async function openForCreate() {
  resetForm(null)
  dialogRef.value?.showModal()
  await nextTick()
  nameInputRef.value?.focus()
}

async function openForEdit(game) {
  resetForm(game)
  dialogRef.value?.showModal()
  await nextTick()
  nameInputRef.value?.focus()
}

function close() {
  dialogRef.value?.close()
}

function handleNativeClose() {
  if (dialogRef.value) {
    dialogRef.value.returnValue = ''
  }
  confirmingDelete.value = false
  formError.value = ''
}

function handleSubmit() {
  formError.value = ''
  if (!form.name.trim()) {
    formError.value = 'Game name is required.'
    nameInputRef.value?.focus()
    return
  }

  const [hh, mm] = form.resetTime.split(':').map(Number)
  if (!Number.isInteger(hh) || !Number.isInteger(mm)) {
    formError.value = 'Please choose a valid reset time.'
    return
  }

  emit('save', {
    id: editingId.value,
    data: {
      name: form.name,
      server: form.server,
      iconUrl: form.iconUrl,
      resetHour: hh,
      resetMinute: mm,
      utcOffsetMin: form.utcOffsetMin,
      remindBeforeMin: form.remindBeforeMin,
      remindersEnabled: form.remindersEnabled,
      hidden: form.hidden,
    },
    done: () => close(),
    fail: (msg) => {
      formError.value = msg
    },
  })
}

function handleDelete() {
  if (!confirmingDelete.value) {
    confirmingDelete.value = true
    return
  }
  emit('delete', {
    id: editingId.value,
    done: () => close(),
    fail: (msg) => {
      formError.value = msg
    },
  })
}

// Light-dismiss fallback for browsers without <dialog closedby="any"> (e.g. Safari)
let cleanupBackdropListeners = null

onMounted(() => {
  const dialog = dialogRef.value
  if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return

  const isOutside = (e) => {
    const r = dialog.getBoundingClientRect()
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
  }

  let pressedOutside = false
  const onPointerDown = (e) => {
    pressedOutside = isOutside(e)
  }
  const onPointerUp = (e) => {
    if (pressedOutside && isOutside(e)) dialog.close()
    pressedOutside = false
  }

  dialog.addEventListener('pointerdown', onPointerDown)
  dialog.addEventListener('pointerup', onPointerUp)
  cleanupBackdropListeners = () => {
    dialog.removeEventListener('pointerdown', onPointerDown)
    dialog.removeEventListener('pointerup', onPointerUp)
  }
})

onBeforeUnmount(() => {
  cleanupBackdropListeners?.()
})

defineExpose({ openForCreate, openForEdit })
</script>

<template>
  <dialog
    ref="dialogRef"
    class="editor-dialog"
    closedby="any"
    aria-labelledby="editor-title"
    @close="handleNativeClose"
  >
    <div class="sheet-grab" aria-hidden="true"></div>

    <div class="dialog-header">
      <h2 id="editor-title">{{ isEditing ? 'Edit game' : 'Add game' }}</h2>
      <button type="button" class="close-btn" aria-label="Close dialog" @click="close">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <form class="editor-form" @submit.prevent="handleSubmit">
      <div class="form-row-2">
        <div class="field">
          <label for="game-name">Game name <span aria-hidden="true">*</span></label>
          <input
            id="game-name"
            ref="nameInputRef"
            v-model="form.name"
            name="name"
            type="text"
            required
            maxlength="60"
            autofocus
          />
        </div>

        <div class="field">
          <label for="game-server">Server</label>
          <input
            id="game-server"
            v-model="form.server"
            name="server"
            type="text"
            maxlength="30"
            placeholder="e.g. Global, Asia"
          />
        </div>
      </div>

      <div class="field">
        <span class="field-label">Icon</span>
        <div class="preset-row" role="group" aria-label="Icon presets">
          <button
            v-for="preset in ICON_PRESETS"
            :key="preset.id"
            type="button"
            class="preset-btn"
            :aria-pressed="form.iconUrl === preset.url"
            :aria-label="`Use ${preset.label} icon`"
            :title="preset.label"
            @click="selectPreset(preset.url)"
          >
            <img :src="preset.url" alt="" />
          </button>

          <button
            type="button"
            class="preset-btn preset-initials"
            :aria-pressed="!form.iconUrl"
            aria-label="Use game initials instead of image"
            title="Initials"
            @click="selectPreset('')"
          >
            {{ (form.name || '?').slice(0, 2).toUpperCase() }}
          </button>
        </div>

        <label for="game-icon" class="sub-label">Custom icon URL</label>
        <div class="icon-input-row">
          <input
            id="game-icon"
            v-model="form.iconUrl"
            name="iconUrl"
            type="text"
            inputmode="url"
            autocorrect="off"
            autocapitalize="none"
            spellcheck="false"
            placeholder="https://… (optional)"
            @input="previewError = false"
          />
          <span class="icon-preview" aria-hidden="true">
            <img
              v-if="form.iconUrl && !previewError"
              :src="form.iconUrl"
              alt=""
              @error="previewError = true"
            />
            <span v-else>{{ (form.name || '?').slice(0, 2).toUpperCase() }}</span>
          </span>
        </div>
      </div>

      <div class="form-row-2">
        <div class="field">
          <label for="game-reset-time">Server reset time <span aria-hidden="true">*</span></label>
          <input
            id="game-reset-time"
            v-model="form.resetTime"
            name="resetTime"
            type="time"
            required
          />
        </div>

        <div class="field">
          <label for="game-timezone">Server timezone</label>
          <select id="game-timezone" v-model.number="form.utcOffsetMin" name="utcOffsetMin">
            <option v-for="tz in timezoneOptions" :key="tz.value" :value="tz.value">
              {{ tz.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="game-remind-lead">Reminder lead time</label>
        <select id="game-remind-lead" v-model.number="form.remindBeforeMin" name="remindBeforeMin">
          <option v-for="opt in leadTimeOptions" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>

      <div class="toggle-list">
        <label class="checkbox-field" for="game-reminders-enabled">
          <input
            id="game-reminders-enabled"
            v-model="form.remindersEnabled"
            name="remindersEnabled"
            type="checkbox"
          />
          <span>Send Discord reminder if not done in time</span>
        </label>

        <label class="checkbox-field" for="game-hidden">
          <input id="game-hidden" v-model="form.hidden" name="hidden" type="checkbox" />
          <span>Hide from main list (also pauses alerts)</span>
        </label>
      </div>

      <p v-if="formError" class="form-error" role="alert">
        {{ formError }}
      </p>

      <div class="dialog-actions">
        <div v-if="isEditing" class="delete-zone">
          <button
            v-if="!confirmingDelete"
            type="button"
            class="btn btn-danger"
            :disabled="saving"
            @click="handleDelete"
          >
            Delete
          </button>
          <template v-else>
            <button
              type="button"
              class="btn btn-danger"
              :disabled="saving"
              @click="handleDelete"
            >
              Confirm delete
            </button>
            <button
              type="button"
              class="btn"
              :disabled="saving"
              @click="confirmingDelete = false"
            >
              Keep
            </button>
          </template>
        </div>

        <div class="primary-actions">
          <button type="button" class="btn" :disabled="saving" @click="close">Cancel</button>
          <button type="submit" class="btn btn-primary" :disabled="saving">
            {{ saving ? 'Saving…' : 'Save' }}
          </button>
        </div>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
.editor-dialog {
  width: min(calc(100vw - 1.5rem), 30rem);
  max-height: calc(100dvh - 2rem);
  overflow-y: auto;
  margin: auto;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.36);

  opacity: 0;
  transition-property: opacity, transform, display, overlay;
  transition-duration: 0.22s;
  transition-timing-function: var(--ease-out);
  transition-behavior: allow-discrete;
}

@media (prefers-reduced-motion: no-preference) {
  .editor-dialog {
    transform: translateY(12px) scale(0.98);
  }
}

.editor-dialog[open] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 1;

  @starting-style {
    opacity: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    transform: translateY(0) scale(1);

    @starting-style {
      transform: translateY(12px) scale(0.98);
    }
  }
}

.editor-dialog::backdrop {
  background-color: rgba(10, 10, 12, 0);
  transition-property: background-color, display, overlay;
  transition-duration: 0.22s;
  transition-timing-function: var(--ease-out);
  transition-behavior: allow-discrete;
}

.editor-dialog[open]::backdrop {
  background-color: rgba(10, 10, 12, 0.58);

  @starting-style {
    background-color: rgba(10, 10, 12, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .editor-dialog,
  .editor-dialog::backdrop {
    transition-duration: 0.1s;
  }
}

.sheet-grab {
  display: none;
  width: 2.25rem;
  height: 0.25rem;
  border-radius: 999px;
  background: var(--border);
  margin: -0.25rem auto 0;
}

@media (max-width: 639px) {
  .editor-dialog {
    position: fixed;
    inset: auto 0 0 0;
    width: 100%;
    max-width: none;
    max-height: 90dvh;
    margin: 0;
    border-radius: 1rem 1rem 0 0;
    border-bottom: 0;
    padding-bottom: max(1.25rem, env(safe-area-inset-bottom, 0px));
  }

  @media (prefers-reduced-motion: no-preference) {
    .editor-dialog {
      transform: translateY(100%);
    }

    .editor-dialog[open] {
      transform: translateY(0);

      @starting-style {
        transform: translateY(100%);
      }
    }
  }

  .sheet-grab {
    display: block;
  }
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.close-btn {
  min-inline-size: 2.75rem;
  min-block-size: 2.75rem;
  border: 0;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--text-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.close-btn:hover {
  background: var(--surface-raised);
  color: var(--text);
}

.editor-form {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.form-row-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

label,
.field-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.sub-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

input[type='text'],
input[type='time'],
select {
  width: 100%;
  min-block-size: 2.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--bg);
  font-size: max(1rem, 1em);
}

.preset-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.preset-btn {
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border-radius: 0.5rem;
  border: 1.5px solid var(--border);
  background: var(--surface-raised);
  overflow: hidden;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: border-color 0.15s var(--ease-out);
}

.preset-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preset-btn[aria-pressed='true'] {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 28%, transparent);
}

.preset-initials {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.icon-input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-preview {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--surface-raised);
  display: grid;
  place-items: center;
  overflow: hidden;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
}

.icon-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.toggle-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.checkbox-field {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  min-block-size: 2.75rem;
  font-size: 0.875rem;
  color: var(--text);
  cursor: pointer;
}

.checkbox-field input[type='checkbox'] {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}

.form-error {
  margin: 0;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--danger) 12%, var(--surface));
  color: var(--danger);
  font-size: 0.8125rem;
}

.dialog-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

.delete-zone,
.primary-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.primary-actions {
  margin-inline-start: auto;
}

@media (max-width: 520px) {
  .form-row-2 {
    grid-template-columns: 1fr;
  }
}
</style>
