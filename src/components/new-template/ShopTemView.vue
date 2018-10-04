<template>
   <div class="shop-controller">
      <ul class="w3-row-padding w3-padding-16 w3-center">
        <li v-for="(country,index) in movieInfos" :key="index" class="w3-quarter">
            <img v-bind:src="country.images" alt="Popsicle">
            <div class="content"><h3>{{country.name}}</h3></div>
            <!--還可預定 btn-danger-->
            <!--剩下最後一個 btn-success-->
            <!--預訂完 btn-secondary-->
            <div class="button_status">
              <button type="button" :class="{
              'btn btn-danger': country.total == 1,
              'btn btn-success': country.total >= 2,
              'btn btn-secondary disabled': !country.total
              }"><v-icon name="shopping-cart"/>
                <span v-if="country.total == 1"> 最後 {{ country.total }} 客</span>
                <span v-if="country.total >= 2"> 限量 {{ country.total }} 客</span>
                <span v-if="!country.total"> Sold out</span>
              </button>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      movieInfos: [
        {
          id: 2,
          name: "All I Need Is a Popsicle",
          images: "https://www.w3schools.com/w3images/popsicle.jpg",
          total: 5
        },
        {
          id: 3,
          name: "Salmon For Your Skin",
          images: "https://www.w3schools.com/w3images/salmon.jpg",
          total: 0
        },
        {
          id: 4,
          name: "The Perfect Sandwich",
          images:
            "https://www.w3schools.com/w3images/sandwich.jpg",
          total: 1
        },
        {
          id: 4,
          name: "Le French",
          images:
            "https://www.w3schools.com/w3images/croissant.jpg",
          total: 1
        }
      ]
    };
  },
};




</script>
<style>
.content{
  
}
ul li {list-style-type:none }
.w3-row-padding {
  max-width: 1200px;
  margin-top: 100px;
  margin: auto;
}
.w3-quarter h3{
  font-size : 22px;
  height:60px;
  text-align:center;
  line-height: 60px;
}
.w3-quarter p{
  font-size :10px;
}
.w3-quarter{
  float:left;
  width: 24%;
  padding: 10px;
}
.w3-quarter img{
  width: 100%;
}
.shop-controller{
  width: 100%;
    margin: 0 auto;
}
.button_status{
  width: 47%;
  margin: 0 auto;
}

</style>