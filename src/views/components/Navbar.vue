
<template>

  <nav class="rgba-stylish-strong">

    <div class="navbar navbar-dark navbar--top">

      <router-link to="/">
        <img class="logo" src="static/img/icons/icon.png" alt="Game Wiki"></img>
      </router-link>

      <form  class="form--nav">

        <input class="form-control search--input" id="search--input" type="text" placeholder="Search" aria-label="Search" />
        <ul class="search-menu">
          <!-- <li class="dropdown-item">Some dropdown</li>
          <li class="dropdown-item">Some dropdown</li>
          <li class="dropdown-item">Some dropdown</li> -->

        </ul>

      </form>

      <router-link to="/profile">
        <img class="profile-pic" src="static/img/icons/profile-pic.png" alt="Your Profile"/>
      </router-link>
    </div>

    <div class="rgba-stylish-light">

      <ul class="categories">
        <li>
          <router-link to="/action">Action</router-link>
        </li>

        <li>
          <router-link to="/adventure">Adventure</router-link>
        </li>

        <li>
          <router-link to="/arcade">Arcade</router-link>
        </li>

        <li>
          <router-link to="/cade">Card</router-link>
        </li>

        <li>
          <router-link to="/educational">Educational</router-link>
        </li>

        <li>
          <router-link to="/racing">Racing</router-link>
        </li>

        <li>
          <router-link to="/strategy">Strategy</router-link>
        </li>

      </ul>

    </div>

  </nav>

</template>


<script>

export default {
  name: 'Navbar'
}


</script>


<style lang="sass">


</style>
