
<template>
<div>
  <div class="showbox" v-if="Games.length < 25">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>

  <body v-if="Games.length > 1">

    <Navbar></Navbar>

    <div class="container-d"  v-for="Game in Games" :key="Game.id">
      <article v-if="Game['name'] === GameName">

        <div class="top">
          <img :src="Game['cover']['url']" class="card-d" >
          <h1 class="game-name">{{ Game['name'] }}</h1>

          <div class="buttons-d">
            <button class="btn btn-primary detail">
              <i class="fa fa-plus" aria-hidden="true"></i>
              &nbsp  Wishlist
            </button>

            <button class="btn btn-success detail">
              <i class="fa fa-download" aria-hidden="true"></i>
              &nbsp Download
            </button>
          </div>

        </div>

        <div class="container-d">
          <h2><b>Game Summary:</b></h2>
          <p class="game-summary">{{ Game['summary'] }}</p>

          <h3><b>Release date: </b><span style="font-family: 'Quantico', sans-serif">{{ Game['release_dates'][0]['human'].substr(0, 4) }}</span></h3>
          </br>
        </div>

        <div class="container-d">
          <h2><b>Reviews:</b></h2>
          <div class="reviews">
            <p class="review-number">{{ Game['rating'] }}</p>
            <i v-for="Game in Game['rating']" :key="Game['id']" class="fa fa-star" aria-hidden="true"></i><i v-for="Game in (5 - Game['rating'])" :key="Game['id']" class="fa fa-star-o" aria-hidden="true"></i>
          </div>
        </div>

        <div class="container-d">
          <h2><b>Comments:</b></h2>
          <div class="comments-top">
            <h3><b>Person's Name</b></h3>
            <img src="static/img/icons/profile-pic.png" class="card-d profile-img">
          </div>
          <div class="comments-bottom">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
        </div>

      </article>

    </div>
  </body>
</div>
</template>


<script>
import Navbar from '../components/Navbar'
import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDYl9tJn568O4moJRDWUgZOupfRM1LinAs",
  authDomain: "game-wiki-u.firebaseapp.com",
  databaseURL: "https://game-wiki-u.firebaseio.com",
  projectId: "game-wiki-u",
  storageBucket: "game-wiki-u.appspot.com",
  messagingSenderId: "71587951887"
};

let fire = Firebase.initializeApp(config, 'noone')
let something = fire.database()



export default {
  components: {
    Navbar,
  },
  firebase: {
    Games: something.ref('/')
  },

  name: "DetailedPage",

  props: [
    'GameID', 'Game'
  ],

  data() {
    return {
      GameName: localStorage.getItem('GameName'),
      GameUrl: localStorage.getItem('GameUrl'),
      isReady: true
    }
  },

  computed: {
  }
}

</script>



<style lang="scss">
$green: #008744;
$blue: #0057e7;
$red: #d62d20;
$yellow: #ffa700;
$white: #eee;

// scaling... any units
$width: 100px;



// demo-specific
.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15%;
}
// end demo-specific

.loader {
  position: relative;
  margin: 0 auto;
  width: $width;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: $red;
  }
  40% {
    stroke: $blue;
  }
  66% {
    stroke: $green;
  }
  80%,
  90% {
    stroke: $yellow;
  }
}

  .card-d {
    width: 150px;
    height: 150px;
    display: inline-block;
  }

  .game-name {
    text-align: center;
    font-family: 'Quantico', sans-serif;
    display: inline-block;
    font-weight: bold;
  }

  .top {
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    align-items: center;
  }

  .game-summary {
    font-family: 'Catamaran', sans-serif;
  }

  .detail {
    width: 100%;
    height: 55px;
    align-self: flex-end;
  }

  .buttons-d {
    width: 25%;
  }

  .container-d {
    width: 80%;
    margin: 0 auto;
  }

  .reviews {
    text-align: center;
  }

  .review-number {
    font-size: 5rem;
    margin: 0;
    font-family: 'Quantico', sans-serif;
  }

  .profile-img {
    border-radius: 50%;
  }

  .comments-top {
    padding-top: 20px;
    display: inline-block;
    h3 {
      padding: 10px;
    }
    img {
      width: 80%;
      height: 80%;
    }
  }
  .comments-bottom {
    display: inline-block;
    width: 60%;
    font-family: 'Catamaran', sans-serif;
    p {
      margin-left: 10%;
    }
  }

  @media only screen and (max-width: 599px) {
    .buttons-d {
      width: 80%;
    }
    .top {
      flex-direction: column;
    }
    .showbox {
      top: 30%;
    }

  }
</style>
