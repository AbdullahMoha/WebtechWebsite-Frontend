<template>
  <h1>Filme</h1>
  <div class="fard-container">
    <div class="fard" v-for="(movie, index) in movies" :key="index">
      <img :src="getImgSrc(movie.imgSrc)" class="card-img-top" :alt="movie.title">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.date }}</p>
        <button @click="toggleFavorite(movie)" :class="['btn', isFavorite(movie) ? 'btn-secondary' : 'btn-primary']">
          {{ isFavorite(movie) ? 'Entfavorisieren' : 'Favorisieren' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filme',
  data () {
    return {
      movies: [
        { title: 'To The Moon', date: '11. Juli 2024', imgSrc: 'ToTheMoon.png' },
        { title: 'Borderlands', date: '22. August 2024', imgSrc: 'Borderlands.png' },
        { title: 'Alles Fifty Fifty', date: '29. August 2024', imgSrc: 'FührerUndVerführer.png' },
        { title: 'Führer und Verführer', date: '11. Juli 2024', imgSrc: 'AllesFiftyFifty.jpg' },
        { title: 'Zwei zu Eins', date: '25. Juli 2024', imgSrc: 'ZweiZuEins.png' }
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
    },
    getImgSrc (imgSrc) {
      try {
        return require(`../assets/${imgSrc}`)
      } catch (e) {
        console.error(`Error loading image: ${imgSrc}`, e)
        return ''
      }
    }
  },
  created () {
    this.loadFavorites()
  }
}
</script>

<style scoped>

.fard-container{
  display: flex;
  flex-wrap: wrap;
  gap: 50px; /* Abstand zwischen den Karten */
  justify-content: flex-start; /* Karten nach links ausrichten */
  margin-left: 0px; /* Abstand von der linken Seite */
}

.card-img-top {
  width: 100%;
  height: auto;
}

.fard{
  flex: 0 0 auto; /* Verhindert das Schrumpfen der Karten */
  width: 200px; /* Feste Breite der Karten */
  box-sizing: border-box;
  background-color: #ffffff; /* Hintergrundfarbe der Karten */
  color: #333; /* Textfarbe der Karten */
  border: 1px solid #ccc; /* Randfarbe der Karten */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Schatten der Karten */
}

.btn-primary {
  background-color: #007bff; /* Hintergrundfarbe der Schaltfläche */
  border-color: #007bff; /* Randfarbe der Schaltfläche */
  color: #fff; /* Textfarbe der Schaltfläche */
}

.btn-primary:hover {
  background-color: #0056b3; /* Hintergrundfarbe der Schaltfläche beim Hover */
  border-color: #004085; /* Randfarbe der Schaltfläche beim Hover */
}

.btn-primary {
  background-color: #ffd700; /* Gelbe Hintergrundfarbe */
  border-color: #ffd700; /* Gelbe Randfarbe */
  color: #333; /* Dunkle Textfarbe */
}
</style>
