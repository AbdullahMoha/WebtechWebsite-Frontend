<template>
  <h1>Serien</h1>
  <div class="card-container">
    <div class="card" v-for="(series, index) in series" :key="index">
      <img :src="getImgSrc(series.imgSrc)" class="card-img-top" :alt="series.title">
      <div class="card-body">
        <h5 class="card-title">{{ series.title }}</h5>
        <p class="card-text">{{ series.date }}</p>
        <button @click="toggleFavorite(series)" :class="['btn', isFavorite(series) ? 'btn-secondary' : 'btn-primary']">
          {{ isFavorite(series) ? 'Entfavorisieren' : 'Favorisieren' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Serien',
  data () {
    return {
      series: [
        { title: 'Arcane Staffel 2', date: 'November 2024', imgSrc: 'Arcane.jpg' },
        { title: 'Der Herr der Ringe: Die Ringe der Macht', date: '29. August 2024', imgSrc: 'DerHerrDerRingeStaffel2.png' },
        { title: 'HouseOfTheDragon Staffel 2', date: '21. August 2024', imgSrc: 'HouseOfTheDragon.jpg' },
        { title: 'Squid Game Staffel 2', date: 'Dezember 2024', imgSrc: 'SquidGameStaffel2.jpg' },
        { title: 'Agatha All Along', date: '18. September 2024', imgSrc: 'AgathaAllAlong.jpg' }
      ],
      favorites: []
    }
  },
  methods: {
    toggleFavorite (series) {
      const index = this.favorites.findIndex(fav => fav.title === series.title)
      if (index === -1) {
        this.favorites.push(series)
      } else {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
    },
    isFavorite (series) {
      return this.favorites.some(fav => fav.title === series.title)
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

.card-container{
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

.card{
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
