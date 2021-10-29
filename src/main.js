import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "./assets/app.scss";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueComp from "@vue/composition-api";
import "bootstrap/dist/css/bootstrap.css";
Vue.use(VueComp);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
