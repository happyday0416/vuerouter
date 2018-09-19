<template>
  <div class="two">
    <input type="text" id="focus" v-model="model_filter">
      <ul>
        <li v-for="(infos,i) in getPlayers" :key="i" transition="staggered" stagger="100">
            {{infos.name}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model_filter: '',
      countries: [],
      errored:false,
      info:[]
    }
  },
  mounted () {
   /*  var that = this;
    that.axios.get('//api.jsonbin.io/b/5ba09a6274ca4633aade22fb').then(response => (this.info = response)).catch(error => {
      console.log(error)
      this.errored = true
    })
    */
      this.axios.get('//api.jsonbin.io/b/5ba09a6274ca4633aade22fb').then((response)=>{
        this.info=response.data;
      }).catch((response)=>{
        console.log(response);
      })
  },
  computed:{
    getPlayers() {
      var _this = this;
      var textSearch = this.info.filter(function(el) {
         return el.name.toLowerCase().includes(_this.model_filter.toLowerCase())
       });

      return textSearch;
    }
  },
  /*getPlayers() {
      var _this = this;
      var players = this.movieInfos.filter(function(player) {
        return player.name.toLowerCase().includes(_this.filter.toLowerCase());
      });
      console.log(players);
      return players;
    }
  }*/
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
<style>
ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
}
.staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
</style>
