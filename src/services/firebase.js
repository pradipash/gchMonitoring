// src/services/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvv7h4YGKySe1paEWBNQr0xdhCXOhDGJs',
  authDomain: 'gch-monitoring.firebaseapp.com',
  projectId: 'gch-monitoring',
  storageBucket: 'gch-monitoring.firebasestorage.app',
  messagingSenderId: '205898511244',
  appId: '1:205898511244:web:3618063c3158fe85085ca9',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { firebaseApp, db }
