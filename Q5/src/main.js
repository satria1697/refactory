import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VSelect from "vue-select";

Vue.component("v-select", VSelect);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import VCalendar from "v-calendar";
Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
