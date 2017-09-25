
<template>
  <body>

    <Navbar></Navbar>

    <CategoryTop></CategoryTop>


  </body>

</template>


<script>
import Navbar from '../components/Navbar'
import CategoryTop from '../components/CategoryTop'

export default {
  components: {
    Navbar,
    CategoryTop
  }
}

</script>



<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
