<template>
   <div class="hello">
      <input type="text" id="focus" v-model="filter">
      <ul>
        <li v-for="(country,index) in getPlayers" :key="index">
            {{country.name}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 1,
      inputSearch: [],
      posts: [],
      firstStar: [
        {
          id: 1,
          name: "Charles Wilson",
          images: "http://enwaara.se/codepen/strangerthings.jpg",
          star: 5
        }
      ],
      movieInfos: [
        {
          id: 2,
          name: "Tony Domo",
          images: "http://enwaara.se/codepen/houseofcards.jpg",
          star: 5
        },
        {
          id: 3,
          name: "Rump Baker",
          images: "http://enwaara.se/codepen/narcos.jpg",
          star: 3
        },
        {
          id: 4,
          name: "Brad Pitt",
          images:
            "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/9e2y5q7wlcvnehp5givtjhehx1o.jpg?itok=MsaE5bo-",
          star: 1
        },
        {
          id: 5,
          name: "Kermit the Frog",
          images:
            "https://heroichollywood.b-cdn.net/wp-content/uploads/2018/02/Mission-Impossible-Fallout-Henry-Cavill-Mustache.jpg?x42694",
          star: 2
        },
        {
          id: 6,
          name: "Taylor Swift",
          images:
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2/vOUPHWV8aGXq4yYQ2csje5LdT6g.jpg",
          star: 4
        },
        {
          id: 7,
          name: "Default",
          images: "http://enwaara.se/codepen/strangerthings.jpg",
          star: 5
        }
      ],
      filter: ""
     
    };
  },
  computed:{
    getPlayers() {
      var _this = this;
      var players = this.movieInfos.filter(function(player) {
        return player.name.toLowerCase().includes(_this.filter.toLowerCase());
      });
      console.log(players);
      return players;
    }
  }
}
</script>