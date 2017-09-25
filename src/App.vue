import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDYl9tJn568O4moJRDWUgZOupfRM1LinAs",
    authDomain: "game-wiki-u.firebaseapp.com",
    databaseURL: "https://game-wiki-u.firebaseio.com",
    projectId: "game-wiki-u",
    storageBucket: "game-wiki-u.appspot.com",
    messagingSenderId: "71587951887"
  };

let app = Firebase.initializeApp(config)
let Games = app.database()

<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',

}

</script>

<style lang="sass">
@import '../node_modules/mdbootstrap/css/mdb.min.css';
@import 'styles/style.css';

</style>
