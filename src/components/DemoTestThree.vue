<template>
  <div class="hello">
    <vSelect/>
    <v-select v-model="selected" value.sync="foo" :options="options" >
    </v-select>
    <input type="hidden" v-model="selected" name="foo" />
    <button v-on:click="login('', '')">Login</button>
  </div>
</template>

<script>

import vSelect from './Select.vue';

export default {
  components: { vSelect },
  data () {
    return {
     selected:'One',
     info:[],
     model_filter:'',
     options: [],
      loading: false,
      multiSelectUser: null,
      vSelectUser: null
    }
  },
  methods:{
    login: function(username, password,selected) {
      //https://jsonplaceholder.typicode.com/posts
      console.log(this.selected)
      this.axios.post('https://jsonplaceholder.typicode.com/posts',this.selected).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  
  },
  mounted () {
     this.axios.get('//api.jsonbin.io/b/5ba1fd9a20f16433785ba1bc').then((response)=>{
        this.info=response.data;
        console.log(response)
      }).catch((response)=>{
        console.log(response);
      })



  },
  computed:{
   getSelect() {
      var textSearch = this.info.filter(function(el) {
         return el.text;
       });

      return textSearch;
    }
  },
}
</script>
