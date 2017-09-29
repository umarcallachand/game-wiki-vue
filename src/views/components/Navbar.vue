
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
        <li @click="detail('e','action')">
          <router-link to="/category/action">Action</router-link>
        </li>

        <li @click="detail('e','adventure')">
          <router-link to="/category/adventure">Adventure</router-link>
        </li>

        <li @click="detail('e','arcade')">
          <router-link to="/category/arcade">Arcade</router-link>
        </li>

        <li @click="detail('e','card')">
          <router-link to="/category/card">Card</router-link>
        </li>

        <li @click="detail('e','educational')">
          <router-link router-link-active="active" to="/category/educational">Educational</router-link>
        </li>

        <li @click="detail('e','racing')">
          <router-link to="/category/racing">Racing</router-link>
        </li>

        <li @click="detail('e','strategy')">
          <router-link to="/category/strategy">Strategy</router-link>
        </li>

      </ul>

    </div>

  </nav>

</template>


<script>

export default {
  name: 'Navbar',

  methods: {
    detail: function(e, category){
      localStorage.setItem('Category', category)
      document.location.reload()
    }
  }
}


</script>


<style lang="scss">

  .active {
    background: black;
  }

</style>
