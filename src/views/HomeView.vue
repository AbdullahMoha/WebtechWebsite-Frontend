<template>
  <div class="home">
    <img alt="MSGI Logo" src="../assets/MSGI-Logo.jpg" width="200" height="auto">
    <HelloWorld msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  position: relative;
  top: -80px; /* Passe diesen Wert an, um die vertikale Position zu ändern */
  left: 20px; /* Passe diesen Wert an, um die horizontale Position zu ändern */
}
</style>
