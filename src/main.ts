import { createApp } from 'vue'
import VueCountdown from '@chenfengyuan/vue-countdown'
import App from './App.vue'

const app = createApp(App)

app.component('VueCountdown', VueCountdown)

app.mount('#app')
