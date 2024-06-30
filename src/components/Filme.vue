<template>
  <div>
    <h1>Filme</h1>
    <div class="row-container">
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
h1 {
  margin-bottom: 100px;
}

body {
  background-color: #f0f0f0;
  color: #333;
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

.row-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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

.btn-primary {
  background-color: #ffd700;
  border-color: #ffd700;
  color: #333;
}

.btn-primary:hover {
  background-color: #f0c500;
  border-color: #f0c500;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
