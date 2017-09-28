
<template>
<div style="display: inline-block">

  <!-- Top category -->
  <div class="card game-tag" v-if="Games.length > 1 && Category === 'Top' && Games[GameID]['rating'] > 3">

      <GameImage :GameUrl="Games[GameID]['cover']['url']" :GameName="Games[GameID]['name']"></GameImage>

      <GameContent :GameName="Games[GameID]['name']" :GameSummary="Games[GameID]['summary'].substr(0, 40) + '...'" :GameDate="Games[GameID]['release_dates'][0]['human'].substr(0, 4)" :Rating="Games[GameID]['rating']"></GameContent>

      <p>
        <i v-for="game in Games[GameID]['rating']" :key="game['id']" class="fa fa-star" aria-hidden="true"></i><i v-for="game in (5 - Games[GameID]['rating'])" :key="game['id']" class="fa fa-star-o" aria-hidden="true"></i>
      </p>


  </div>


  <!-- Newest category -->
  <div class="card game-tag" v-else-if="Games.length > 1 && Category === 'Newest' && parseInt(Games[GameID]['release_dates'][0]['human'].substr(0, 4)) > 2010 ">

    <router-link to="/details">
      <GameImage :GameUrl="Games[GameID]['cover']['url']" :GameName="Games[GameID]['name']"></GameImage>

      <GameContent :GameName="Games[GameID]['name']" :GameSummary="Games[GameID]['summary'].substr(0, 40) + '...'" :GameDate="Games[GameID]['release_dates'][0]['human'].substr(0, 4)" :Rating="Games[GameID]['rating']"></GameContent>

      <p>
        <i v-for="game in Games[GameID]['rating']" :key="game['id']" class="fa fa-star" aria-hidden="true"></i><i v-for="game in (5 - Games[GameID]['rating'])" :key="game['id']" class="fa fa-star-o" aria-hidden="true"></i>
      </p>
    </router-link>

  </div>



</div>
</template>


<script>
import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDYl9tJn568O4moJRDWUgZOupfRM1LinAs",
  authDomain: "game-wiki-u.firebaseapp.com",
  databaseURL: "https://game-wiki-u.firebaseio.com",
  projectId: "game-wiki-u",
  storageBucket: "game-wiki-u.appspot.com",
  messagingSenderId: "71587951887"
};

let app = Firebase.initializeApp(config)
let db = app.database()


export default {
  firebase: {
    Games: db.ref('/')
  },

  name: "GameTag",

  props: [
    'GameID', 'Category'
  ],


  // data() {
  //   return {
  //     id: Games[GamesID]
  //   }
  // }


}
</script>


<style scoped>

  a {
    color: black;
  }

</style>
