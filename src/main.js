// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import vSelect from "vue-select";
Vue.use(VueAxios, axios);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
