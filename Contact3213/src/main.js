import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";
import "fomantic-ui-css/semantic.min.css";


const app = createApp(App).use(router).mount('#app');











