//router

import Vue from "vue";
import Router from "vue-router";
import Vuex from "vuex";
import ShopTemView from "../components/new-template/ShopTemView";
import AboutTemView from "../components/new-template/AboutTemView";
import FAQTemView from "../components/new-template/FaqTemView";
import ContentTemView from "../components/new-template/ContentTemView";
import store from "store";

Vue.use(Router);
Vue.use(Vuex);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/Shop",
      name: "search",
      component: ShopTemView
    },
    {
      path: "/About",
      name: "about",
      component: AboutTemView
    },
    {
      path: "/FAQ",
      name: "faq",
      component: FAQTemView
    },
    {
      path: "/Content",
      name: "content",
      component: ContentTemView
    }
  ]
});
