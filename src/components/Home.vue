<template>
  <div>
    <div class="logo-container">
      <img src="../assets/MSGI-Logo.jpg" class="logo-img" alt="Logo">
    </div>
    <div class="row-container">
      <div class="fard-container">
        <div v-for="(movie, index) in movies" :key="index" class="fard">
          <img :src="movie.imgSrc" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.date }}</p>
            <button @click="toggleFavorite(movie)" :class="['btn', isFavorite(movie) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite(movie) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      movies: [
        { title: 'To The Moon', date: '11. Juli 2024', imgSrc: '../assets/ToTheMoon.png' },
        { title: 'Borderlands', date: '22. August 2024', imgSrc: '../assets/Borderlands.png' },
        { title: 'Alles Fifty Fifty', date: '29. August 2024', imgSrc: '../assets/FührerUndVerführer.png' },
        { title: 'Führer und Verführer', date: '11. Juli 2024', imgSrc: '../assets/AllesFiftyFifty.jpg' },
        { title: 'Zwei zu Eins', date: '25. Juli 2024', imgSrc: '../assets/ZweiZuEins.png' }
      ],
      favorites: []
    }
  },
  methods: {
    toggleFavorite (movie) {
      const index = this.favorites.findIndex(fav => fav.title === movie.title)
      if (index === -1) {
        this.favorites.push(movie)
      } else {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
    },
    isFavorite (movie) {
      return this.favorites.some(fav => fav.title === movie.title)
    },
    saveFavorites () {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    loadFavorites () {
      const favorites = localStorage.getItem('favorites')
      if (favorites) {
        this.favorites = JSON.parse(favorites)
      }
    }
  },
  created () {
    this.loadFavorites()
  }
}
</script>

<style scoped>
/* Dein CSS-Code */
</style>
