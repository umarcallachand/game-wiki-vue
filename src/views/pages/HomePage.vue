
<template>
  <body>

    <Navbar></Navbar>

    <CategoryTop></CategoryTop>

    <CategoryNewest></CategoryNewest>

  </body>

</template>


<script>
import Navbar from '../components/Navbar'
import CategoryTop from '../components/CategoryTop'
import CategoryNewest from '../components/CategoryNewest'

export default {
  components: {
    Navbar,
    CategoryTop,
    CategoryNewest
  }
}

</script>



<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
