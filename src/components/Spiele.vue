<!-- Spiele.vue -->
<template>
  <h1>Spiele</h1>
  <div class="row-container">
    <div class="fard-container">
      <div class="fard" v-for="(game, index) in games" :key="index">
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
    toggleFavorite (movie) {
      const index = this.favorites.findIndex(fav => fav.title === movie.title)
      if (index === -1) {
        this.favorites.push(movie)
        fetch('http://localhost:8080/api/beiträge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(movie)
        })
          .then(response => response.json())
          .then(data => console.log('Erfolgreich gespeichert:', data))
          .catch(error => console.error('Fehler beim Speichern:', error))
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
h1 {
  margin-bottom: 100px;
}
.row-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.btn {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border-radius: 80px; /* Abgerundete Ecken */
  font-size: 16px; /* Schriftgröße */
  padding: 10px 20px; /* Innenabstand */
  width: 70%; /* Schaltflächen nehmen 70% der Breite der Karte ein */
  box-sizing: border-box; /* Verhindert, dass Padding die Gesamtbreite beeinflusst */
  margin-bottom: 5px; /* Abstand zum oberen Inhalt */
  transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Übergangseffekte */
  position: relative; /* Relative Positionierung für die Top-Offset */
  left: 50%; /* Zentrieren */
  transform: translateX(-50%); /* Korrigieren Sie die Zentrierung */
  top: -10px; /* 10px nach oben verschieben */
  margin-left: -55px;
}

.fard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: flex-start;
  margin-left: 0px;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.fard {
  flex: 0 0 auto;
  width: 200px;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #ffd700; /* Neue Hintergrundfarbe beim Hover */
  border-color: #ffd700; /* Neue Randfarbe beim Hover */
  color: #383737; /* Neue Textfarbe beim Hover */
}

.btn-primary {
  background-color: #383737; /* Gelbe Hintergrundfarbe */
  border-color: #383737; /* Gelbe Randfarbe */
  color: #ffffff; /* Dunkle Textfarbe */
}

.btn-secondary {
  background-color: #f51637;
  border-color: #383737;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #780c1c; /* Neue Hintergrundfarbe beim Hover */
  border-color: #780c1c; /* Neue Randfarbe beim Hover */
  color: #ffffff; /* Neue Textfarbe beim Hover */
}
</style>
