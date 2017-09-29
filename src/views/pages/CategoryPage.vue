
<template>
<div>
  <Navbar></Navbar>


  <div class="showbox" v-if="Games.length < 15">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>

  <body v-if="Games.length > 1">



    <h1 class="title">{{ Category.replace(/(\b\w)/gi,function(m){return m.toUpperCase()}) }} Games</h1>
    <div class="container-c">
      <div style="display: inline-block" v-for="Game in Games" v-if="Game['category'][0] === Category" :key="Game.id">

          <GameTag :Game="Game" Category="Category"></GameTag>

      </div>
    </div>

  </body>
</div>
</template>


<script>
import Navbar from '../components/Navbar'
import GameTag from '../components/GameTag'
import Firebase from 'firebase'


var config = {
  apiKey: "AIzaSyDYl9tJn568O4moJRDWUgZOupfRM1LinAs",
  authDomain: "game-wiki-u.firebaseapp.com",
  databaseURL: "https://game-wiki-u.firebaseio.com",
  projectId: "game-wiki-u",
  storageBucket: "game-wiki-u.appspot.com",
  messagingSenderId: "71587951887"
};

let f = Firebase.initializeApp(config, 'none')
let thing = f.database()

export default {
  components: {
    Navbar, GameTag
  },
  firebase: {
    Games: thing.ref('/')
  },

  name: "CategoryPage",

  data() {
    return {
      Category: localStorage.getItem('Category')
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


  @media only screen and (max-width: 599px) {
    .showbox {
      top: 50%;
    }

    .container-c {
      display: grid;
      grid-template-columns: 50% 50%;
    }

  }

  @media only screen and (max-width: 425px) {
    .container-c {
      padding-left: 9%;
    }
  }

  @media only screen and (max-width: 375px) {
    .container-c {
      padding-left: 5%;
    }
  }

  @media only screen and (max-width: 320px) {
    .container-c {
      padding-left: 0;
    }
  }
</style>
