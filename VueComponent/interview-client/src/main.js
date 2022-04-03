import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://sample-api.com'

createApp(App).use(Store).mount('#app')
