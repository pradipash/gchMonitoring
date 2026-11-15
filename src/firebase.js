import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvv7h4YGKySe1paEWBNQr0xdhCXOhDGJs',
  authDomain: 'gch-monitoring.firebaseapp.com',
  projectId: 'gch-monitoring',
  storageBucket: 'gch-monitoring.firebasestorage.app',
  messagingSenderId: '205898511244',
  appId: '1:205898511244:web:3618063c3158fe85085ca9',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
})
