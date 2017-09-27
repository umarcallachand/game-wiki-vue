<template>

  <div>
    <h1 class="title">Top Games</h1>
    <div class="container">
      <Slick ref="slick" :options="slickOptions">
        <GameTag v-for="i in 47" Category="Top" :key="i.id" :GameID="i-1"></GameTag>
      </Slick>
    </div>
  </div>

</template>


<script>
import GameTag from './GameTag'
import Slick from 'vue-slick'


export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        variableWidth: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
            }
          }
        ]
      }
    }
  },
  props: [

  ],

  components: {
    GameTag, Slick
  }
}
</script>


<style scoped>


</style>
