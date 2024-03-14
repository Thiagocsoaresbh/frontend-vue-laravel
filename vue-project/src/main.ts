import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import formattingPlugin from './plugins/formattingPlugin';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(formattingPlugin);

app.mount('#app');
