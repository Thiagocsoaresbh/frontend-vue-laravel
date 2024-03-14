import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import formattingPlugin from './plugins/formattingPlugin';

const app = createApp(App);

app.use(router);
app.use(formattingPlugin);

app.mount('#app');
