<template>
  <div class="home">
    <img alt="" src="" width="200" height="auto">
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
  position: fixed;
  top: 100px; /* Abstand von oben */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000; /* Stellt sicher, dass das Logo über anderen Elementen liegt */
}
</style>
