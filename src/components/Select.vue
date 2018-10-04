<template>
  <div class="select-container">
      <v-select :options="options"
                label="name"
                :filterable="false"
                v-model="vSelectUser" 
                v-on:change="applyColor"
      ></v-select>
      
      <span>{{vSelectUser}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["foo", "bar", "baz"],
      loading: false,
      multiSelectUser: null,
      vSelectUser: null
    };
  },
  methods:{
     applyColor:function (){
       this.$emit('triggerChange',this.selected);
       console.log("1")
    }
  }
};
</script>
<style scoped>
.select-container {
  display: inline-block;
  width: 50%;
}
</style>
