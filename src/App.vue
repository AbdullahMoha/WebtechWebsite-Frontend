<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    console.log(`Fetching data from ${process.env.VUE_APP_BACKEND_URL}/api/data`)
    fetch(`${process.env.VUE_APP_BACKEND_URL}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        this.data = data.message
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
