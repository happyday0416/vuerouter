<template>
  <div id="app">
   <ul class="nav">
      <li>
        <router-link to="home">Home</router-link>
      </li>
      <li>
        <router-link to="/Search">Search</router-link>
      </li>
      <li>
        <router-link to="/demo-2">Ajax For search</router-link>
      </li>
      <li>
        <router-link to="/demo-3">DemoThree</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import DemoTestOne from "./components/DemoTestOne"
import DemoTestTwo from "./components/DemoTestTwo"
import DemoTestThree from "./components/DemoTestThree"

export default {
  name: "app",
  components: {
    DemoTestOne,DemoTestTwo,DemoTestThree
  },
  data() {
    return {
      showWhich: "DemoTestOne"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul.nav > li {
  display: inline;
  padding-left: 10px;
}
ul.nav > li::before {
  content: "\2630";
  padding-right: 5px;
}
</style>
