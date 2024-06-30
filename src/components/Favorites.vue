<template>
  <div>
    <h1>Favoriten</h1>
    <div v-if="favorites.length === 0">Keine Favoriten vorhanden!</div>
    <div class="row-container" v-else>
      <div class="card-container">
        <div v-for="(beitrag, index) in favorites" :key="index" class="card">
          <img :src="beitrag.imgSrc" class="card-img-top" :alt="beitrag.title">
          <div class="card-body">
            <h5 class="card-title">{{ beitrag.title }}</h5>
            <p class="card-text">{{ beitrag.date }}</p>
            <button @click="toggleFavorite(beitrag)" class="btn btn-secondary">
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
    toggleFavorite (beitrag) {
      const index = this.favorites.findIndex((fav) => fav.title === beitrag.title)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
      fetch('http://localhost:8080/api/beiträge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(beitrag)
      })
        .then(response => response.json())
        .then(data => console.log('Erfolgreich gespeichert:', data))
        .catch(error => console.error('Fehler beim Speichern:', error))
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
