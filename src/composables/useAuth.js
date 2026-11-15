import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '@/firebase'

const user = ref(null)
const authReady = ref(false)
const authError = ref('')
const signingIn = ref(false)

let initialized = false

function ensureAuthListener() {
  if (initialized) return
  initialized = true
  onAuthStateChanged(auth, (nextUser) => {
    user.value = nextUser
    authReady.value = true
  })
}

async function signIn() {
  authError.value = ''
  signingIn.value = true
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  } catch (err) {
    if (err?.code === 'auth/popup-closed-by-user') {
      return
    }
    if (err?.code === 'auth/unauthorized-domain') {
      authError.value =
        'This domain is not authorized in Firebase Authentication. Add it under Authorized domains.'
    } else if (err?.code === 'auth/popup-blocked') {
      authError.value = 'Sign-in popup was blocked by your browser. Allow popups and try again.'
    } else {
      authError.value = err?.message || 'Sign-in failed. Please try again.'
    }
  } finally {
    signingIn.value = false
  }
}

async function signOut() {
  authError.value = ''
  await firebaseSignOut(auth)
}

export function useAuth() {
  ensureAuthListener()
  return {
    user,
    authReady,
    authError,
    signingIn,
    signIn,
    signOut,
  }
}
