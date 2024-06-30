<template>
  <h1>Serien</h1>
  <div class="row-container">
    <div class="fard-container">
      <div class="fard" v-for="(series, index) in series" :key="index">
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
        fetch('http://localhost:8080/api/beiträge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(series)
        })
          .then(response => response.json())
          .then(data => console.log('Erfolgreich gespeichert:', data))
          .catch(error => console.error('Fehler beim Speichern:', error))
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

h1 {
  margin-bottom: 100px;
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
