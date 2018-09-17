import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import DemoTestOne from "../components/DemoTestOne";
import DemoTestTwo from "../components/DemoTestTwo";
import DemoTestThree from "../components/DemoTestThree";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/demo-1",
      name: "DemoTestOne",
      component: DemoTestOne
    },
    {
      path: "/demo-2",
      name: "DemoTestTwo",
      component: DemoTestTwo
    },
    {
      path: "/demo-3",
      name: "DemoTestThree",
      component: DemoTestThree
    }
  ]
});
