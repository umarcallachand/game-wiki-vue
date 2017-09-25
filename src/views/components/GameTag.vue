<template>

  <div class="card game-tag">
    <img class="game-tag--cover" src={gameCover} alt={game}></img>
    <div class="card-content">
      <h2>{{game}}</h2>
      <h3>{gameSummary}</h3>
      <h3><strong>Release Year:</strong> {gameDate}</h3>
    </div>
    <p>{rating}</p>
  </div>

</template>


<script>


export default {
  name: "GameTag",

  methods: {
  getName(Games) {
    var game = Games['name'];
  }
}
}
</script>


<style scoped>

  .waiting {
    padding: 10px;
    color: #555;
  }

</style>
