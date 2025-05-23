import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './style/index.less';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
