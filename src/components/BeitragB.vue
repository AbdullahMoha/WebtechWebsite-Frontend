<template>
  <div class="card" style="width,: 10rem;">
    <img src="../assets/Borderlands.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Borderlands</p>
    </div>
  </div>
  <div class="card1" style="width: 10rem;">
    <img src="../assets/ToTheMoon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">To The Moon</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeitragB'
}
</script>

<style scoped>
.card {
  position: relative;
  top: 300px; /* Passe diesen Wert an, um die vertikale Position zu ändern */
  left: 50px; /* Passe diesen Wert an, um die horizontale Position zu ändern */
}
.card1 {
  position: relative;
  top: 300px; /* Passe diesen Wert an, um die vertikale Position zu ändern */
  left: 400px; /* Passe diesen Wert an, um die horizontale Position zu ändern */
}
</style>
