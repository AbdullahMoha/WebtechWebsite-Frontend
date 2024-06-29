<template>
  <h1>Spiele</h1>
  <div class="gard-container">
    <div class="gard" v-for="(game, index) in games" :key="index">
      <img :src="getImgSrc(game.imgSrc)" class="card-img-top" :alt="game.title">
      <div class="card-body">
        <h5 class="card-title">{{ game.title }}</h5>
        <p class="card-text">{{ game.date }}</p>
        <button @click="toggleFavorite(game)" :class="['btn', isFavorite(game) ? 'btn-secondary' : 'btn-primary']">
          {{ isFavorite(game) ? 'Entfavorisieren' : 'Favorisieren' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spiele',
  data () {
    return {
      games: [
        { title: 'Black Myth: Wukong', date: '20. August 2024', imgSrc: 'black-myth-wukong-jjjfw.png' },
        { title: 'Silent Hill 2 Remake', date: '8. Oktober 2024', imgSrc: 'silent-hill-2-remake_gjje.jpg' },
        { title: 'Stalker 2', date: '5. September 2024', imgSrc: 'stalker-md.jpg' },
        { title: 'Mario & Luigi: Brothership', date: '7. November 2024', imgSrc: 'Mario&Luigi_Brothership.jpg' },
        { title: 'Grand Theft Auto VI', date: 'Herbst 2025', imgSrc: 'Grand_Theft_Auto_VI.png' }
      ],
      favorites: []
    }
  },
  methods: {
    toggleFavorite (game) {
      const index = this.favorites.findIndex(fav => fav.title === game.title)
      if (index === -1) {
        this.favorites.push(game)
      } else {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
    },
    isFavorite (game) {
      return this.favorites.some(fav => fav.title === game.title)
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
.row-container {
  display: flex;
  justify-content: center; /* Zentriert die Reihen horizontal */
  margin-bottom: 50px; /* Abstand zwischen den Reihen */
}

.gard-container {
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

.gard {
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
</style>
