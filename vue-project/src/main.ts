import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = 'https://bank-test-3c74d9b539e4.herokuapp.com/';

const app = createApp(App)

app.use(router)

app.mount('#app')
