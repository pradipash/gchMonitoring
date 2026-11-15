import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { db } from './firebase'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router)

app.use(VueFire, {
  firestore: {
    experimentalForceLongPolling: true, // Optional: Fixes mobile/firewall issues
  },
})

app.use(VueFireFirestoreOptionsAPI, { db })

app.mount('#app')
