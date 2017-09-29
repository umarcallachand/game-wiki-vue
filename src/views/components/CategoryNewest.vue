<template>

  <div>
    <h1 class="title">Newest Games</h1>
    <div class="container">
      <Slick ref="slick" :options="slickOptions">
        <GameTag v-for="i in 47" Category="Newest" :key="i.id" :GameID="i-1"></GameTag>
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
  },
  methods: {
    next() {
        this.$refs.slick.next();
    },

    prev() {
        this.$refs.slick.prev();
    },

    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$refs.slick.reSlick();
    },
}
}
</script>


<style scoped>

</style>
