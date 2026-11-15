<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { DEFAULT_REMIND_BEFORE_MIN, formatUtcOffset } from '@/lib/reset'

defineProps({
  saving: { type: Boolean, default: false },
})

const emit = defineEmits(['save', 'delete'])

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
})

const TIMEZONE_OPTIONS = [
  -720, -660, -600, -540, -480, -420, -360, -300, -240, -210, -180, -120, -60, 0, 60, 120, 180,
  210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 540, 570, 600, 660, 720, 780, 840,
].map((min) => ({
  value: min,
  label: formatUtcOffset(min),
}))

const LEAD_TIME_OPTIONS = [
  { value: 15, label: '15 minutes before' },
  { value: 30, label: '30 minutes before' },
  { value: 60, label: '1 hour before' },
  { value: 120, label: '2 hours before (default)' },
  { value: 180, label: '3 hours before' },
  { value: 240, label: '4 hours before' },
  { value: 360, label: '6 hours before' },
  { value: 720, label: '12 hours before' },
]

const isEditing = computed(() => Boolean(editingId.value))

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
  } else {
    form.name = ''
    form.server = ''
    form.iconUrl = ''
    form.resetTime = '04:00'
    form.utcOffsetMin = 480
    form.remindBeforeMin = DEFAULT_REMIND_BEFORE_MIN
    form.remindersEnabled = true
  }
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
    <div class="dialog-header">
      <h2 id="editor-title">{{ isEditing ? 'Edit game' : 'Add game' }}</h2>
      <button type="button" class="close-btn" aria-label="Close dialog" @click="close">
        ✕
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
        <label for="game-icon">Icon URL</label>
        <span id="game-icon-hint" class="hint">
          Optional image URL or built-in icon path. Falls back to initials if blank.
        </span>
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
            aria-describedby="game-icon-hint"
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
            <option v-for="tz in TIMEZONE_OPTIONS" :key="tz.value" :value="tz.value">
              {{ tz.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="game-remind-lead">Reminder lead time</label>
        <select id="game-remind-lead" v-model.number="form.remindBeforeMin" name="remindBeforeMin">
          <option v-for="opt in LEAD_TIME_OPTIONS" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>

      <div class="checkbox-field">
        <input
          id="game-reminders-enabled"
          v-model="form.remindersEnabled"
          name="remindersEnabled"
          type="checkbox"
        />
        <label for="game-reminders-enabled">Send Discord reminder if not done in time</label>
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
  width: min(calc(100vw - 1.5rem), 32rem);
  max-height: calc(100dvh - 2rem);
  margin: auto;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.28);
}

.editor-dialog[open] {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
}

.close-btn {
  min-inline-size: 2.75rem;
  min-block-size: 2.75rem;
  border: 0;
  border-radius: 0.625rem;
  background: transparent;
  color: var(--text-muted);
  font-size: 1.125rem;
  cursor: pointer;
}

.close-btn:hover {
  background: var(--surface-subtle);
  color: var(--text);
}

.editor-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
}

.hint {
  font-size: 0.78rem;
  color: var(--text-muted);
}

input[type='text'],
input[type='time'],
select {
  width: 100%;
  min-block-size: 3rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid var(--border);
  background: var(--bg);
  font-size: max(1rem, 1em);
}

.icon-input-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.icon-preview {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.625rem;
  border: 1px solid var(--border);
  background: var(--surface-subtle);
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 0.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
}

.icon-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.checkbox-field {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-block-size: 2.75rem;
}

.checkbox-field input[type='checkbox'] {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.checkbox-field label {
  font-weight: 500;
  cursor: pointer;
}

.form-error {
  margin: 0;
  padding: 0.65rem 0.75rem;
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--danger) 12%, var(--surface));
  color: var(--danger);
  font-size: 0.875rem;
}

.dialog-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.5rem;
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
