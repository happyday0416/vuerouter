<template>
  <div class="hello">
    <vSelect/>
    <select v-model="selected">
      <option v-for="(infos,i) in getSelect" v-bind:value="infos.text" :key="i">
         {{infos.text}}
      </option>
    </select>

    {{selected}}
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
  mounted () {
     this.axios.get('//api.jsonbin.io/b/5ba1fd9a20f16433785ba1bc').then((response)=>{
        this.info=response.data;
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
