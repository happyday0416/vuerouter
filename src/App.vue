<template>
  <div id="app">
    <div class="contoller">
      <header class="header">
        <!--<div class="input-search">
          <v-select label="name" :filterable="false" :options="options" @search="onSearch">
            <NoOption></NoOption>
            <OptionOther></OptionOther>
           <selectedOption></selectedOption>
          </v-select>
          {{answer}}
        </div>-->
        <ul class="nav">
            <!--<li>
              <router-link to="home">Home</router-link>
            </li>-->
            <router-link tag="li" to="/Shop">
              <a active-class="u-link--Active">Shop</a>
            </router-link>
            <router-link tag="li" to="/About">
              <a>About</a>
            </router-link>
            <router-link tag="li" to="/FAQ">
              <a>FAQ</a>
            </router-link>
            <router-link tag="li" to="/Content">
              <a>Content</a>
            </router-link>
            <router-link tag="li" to="/Content">
              <v-icon name="shopping-basket"/>
            </router-link>
            
        </ul>
        </header>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import VueLodash from "vue-lodash";
// or import all icons if you don't care about bundle size
import debounce from "lodash/debounce";
import _ from 'lodash';
import nprogress from "nprogress";


export default {
  name: "app",
  components: {
    VueLodash,_,debounce,nprogress
  },
  methods: {
   /* onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      fetch(
        `https://api.github.com/search/repositories?q=${escape(search)}`
      ).then(res => {
        res.json().then(function(res){
          console.log(res);
          vm.options = res.items.full_name;
        });
        loading(false);
      });
    }, 350),
    doAjax() {
        this.isLoading = true;
        // simulate AJAX
        setTimeout(() => {
          this.isLoading = false
        },5000)
    }*/



  }
};
</script>

<style>
#app {
  /*font-family: "Karma", Roboto, Helvetica, arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul.nav > li {
  display: inline-block;
    padding-left: 10px;
    width: 20%;
    height: 56px;
    line-height: 48px;
}
.router-link-active a{
  color: rgba(127, 82, 113, 1);
 
}

.nav{
  width: 48%;
  margin: 0 auto;
  text-align: center;
}

ul li a:hover { text-decoration: none; }

.header {
  height: 70px;
  margin:0 auto;
  /*background: radial-gradient(ellipse farthest-corner at center bottom, #6beace, #2e9aa4);*/
  padding: 10px 0;
}


</style>
