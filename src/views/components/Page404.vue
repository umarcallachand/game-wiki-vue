<template>

  <div>
    <navbar></navbar>
    <h1>Error 404</h1>
    <h2>Page not Found</h2>
  </div>

</template>


<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>


<style scoped>

  h1,h2 {
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
  }

</style>
