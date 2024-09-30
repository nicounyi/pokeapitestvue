import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'  // Importar el CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // Importar el JavaScript de Bootstrap (incluye Popper.js)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
