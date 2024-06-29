<template>
  <div>
    <h1>Favoriten</h1>
    <div v-if="favorites.length === 0">Keine Favoriten vorhanden!</div>
    <div class="row-container" v-else>
      <div class="fard-container">
        <div v-for="(movie, index) in favorites" :key="index" class="fard">
          <img :src="getImgSrc(movie.imgSrc)" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.date }}</p>
            <button @click="toggleFavorite(movie)" class="btn btn-secondary">
              Entfavorisieren
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  data () {
    return {
      favorites: []
    }
  },
  methods: {
    toggleFavorite (movie) {
      const index = this.favorites.findIndex((fav) => fav.title === movie.title)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
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
body {
  background-color: #f0f0f0; /* Beispiel Hintergrundfarbe */
  color: #333; /* Beispiel Textfarbe */
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px; /* Abstand zwischen dem Logo und der ersten Reihe */
}

.logo-img {
  width: 200px;
  height: auto;
}

.row-container {
  display: flex;
  justify-content: center; /* Zentriert die Reihen horizontal */
  margin-bottom: 50px; /* Abstand zwischen den Reihen */
}

.fard-container, .card-container, .gard-container {
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

.card, .fard, .gard {
  flex: 0 0 auto; /* Verhindert das Schrumpfen der Karten */
  width: 200px; /* Feste Breite der Karten */
  box-sizing: border-box;
  background-color: #ffffff; /* Hintergrundfarbe der Karten */
  color: #333; /* Textfarbe der Karten */
  border: 1px solid #ccc; /* Randfarbe der Karten */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Schatten der Karten */
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

h1{
  color: #ffd700;
  background-color: #5e5004;
}
</style>
