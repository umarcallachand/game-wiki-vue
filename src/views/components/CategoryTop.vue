<template>

  <div class="waiting">
    <GameTag></GameTag>
  </div>

</template>


<script>
import GameTag from './GameTag'

export default {
  components: {
    GameTag
  }
}
</script>


<style scoped>

  .waiting {
    padding: 10px;
    color: #555;
  }

</style>
