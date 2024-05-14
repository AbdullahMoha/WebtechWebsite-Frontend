<template>
  <div class="home">
    <img alt="MSGI Logo" src="../assets/MSGI-Logo.jpg" width="200" height="auto">
    <HelloWorld msg="MSGI"/>
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
