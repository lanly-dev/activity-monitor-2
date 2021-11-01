import { createApp } from 'vue'
import 'vuetify/styles' // Styles
import App from './App.vue'
import { createVuetify } from 'vuetify'

createApp(App).use(createVuetify()).mount('#app')
