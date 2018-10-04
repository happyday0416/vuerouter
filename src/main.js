// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import vSelect from "vue-select";
import store from "store";
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.component("v-select", vSelect);
Vue.component("v-icon", Icon);
Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),
  mode: "hash",
  linkActiveClass: "u-link--Active",
  router,
  store
}).$mount("#app");
