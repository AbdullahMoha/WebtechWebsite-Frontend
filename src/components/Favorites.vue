<template>
  <div>
    <h1>Favoriten</h1>
    <div v-if="sortedFavorites.length === 0">Keine Favoriten vorhanden!</div>
    <div class="row-container" v-else>
      <div class="card-container">
        <div v-for="(beitrag, index) in sortedFavorites" :key="index" class="card">
          <img :src="getImgSrc(beitrag.imgSrc)" class="card-img-top" :alt="beitrag.title">
          <div class="card-body">
            <h5 class="card-title">{{ beitrag.title }}</h5>
            <p class="card-text">{{ beitrag.date }}</p>
            <button @click="showModal(beitrag)" class="btn btn-secondary">
              Entfavorisieren
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal" tabindex="-1" v-if="isModalVisible">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Entfernen?</h5>
            <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Sind Sie sich sicher den Beitrag aus Ihren Favoriten zu entfernen?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">Nicht Entfernen</button>
            <button type="button" class="btn btn-primary" @click="removeFavorite">Entfernen</button>
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
      favorites: [],
      isModalVisible: false,
      itemToRemove: null
    }
  },
  computed: {
    sortedFavorites () {
      return this.favorites.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    }
  },
  methods: {
    toggleFavorite (beitrag) {
      this.showModal(beitrag)
    },
    showModal (item) {
      this.itemToRemove = item
      this.isModalVisible = true
    },
    hideModal () {
      this.isModalVisible = false
      this.itemToRemove = null
    },
    removeFavorite () {
      if (this.itemToRemove) {
        const index = this.favorites.findIndex(fav => fav.title === this.itemToRemove.title)
        if (index !== -1) {
          this.favorites.splice(index, 1)
          this.saveFavorites()
        }
        this.hideModal()
      }
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

.row-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.card-container {
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

.card {
  flex: 0 0 auto;
  width: 200px;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-primary {
  background-color: #ffd700;
  border-color: #ffd700;
  color: #333;
}

.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}
</style>
