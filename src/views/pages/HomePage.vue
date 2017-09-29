
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
  },
  data() {
    return {
      hasLoaded: true
    }
  },
  methods: {
    isLoading: setTimeout(() => {this.hasLoaded = false}, 2000)
  }

}

</script>



<style lang="scss">
  .list {
    width: 100%;
    padding: 0;
  }
</style>
