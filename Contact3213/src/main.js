import "./styles/main.css";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App).use(router).mount("#app");
