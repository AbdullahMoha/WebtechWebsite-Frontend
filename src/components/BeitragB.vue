<template>
  <div>
    <div class="logo-container">
      <img src="../assets/MSGI-Logo.jpg" class="logo-img" alt="Logo">
    </div>
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
    <div class="row-container">
      <div class="card-container">
        <div class="card">
          <img src="../assets/Arcane.jpg" class="card-img-top" alt="Arcane Staffel 2">
          <div class="card-body">
            <h5 class="card-title">Arcane Staffel 2</h5>
            <p class="card-text">November 2024</p>
            <button @click="toggleFavorite({ title: 'Arcane Staffel 2', date: 'November 2024', imgSrc: 'Arcane.jpg' })" :class="['btn', isFavorite({ title: 'Arcane Staffel 2' }) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite({ title: 'Arcane Staffel 2' }) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
        <div class="card">
          <img src="../assets/DerHerrDerRingeStaffel2.png" class="card-img-top" alt="Der Herr der Ringe: Die Ringe der Macht">
          <div class="card-body">
            <h5 class="card-title">Der Herr der Ringe: Die Ringe der Macht</h5>
            <p class="card-text">29. August 2024</p>
            <button @click="toggleFavorite({ title: 'Der Herr der Ringe: Die Ringe der Macht', date: '29. August 2024', imgSrc: 'DerHerrDerRingeStaffel2.png' })" :class="['btn', isFavorite({ title: 'Der Herr der Ringe: Die Ringe der Macht' }) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite({ title: 'Der Herr der Ringe: Die Ringe der Macht' }) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
        <div class="card">
          <img src="../assets/HouseOfTheDragon.jpg" class="card-img-top" alt="HouseOfTheDragon">
          <div class="card-body">
            <h5 class="card-title">HouseOfTheDragon Staffel 2</h5>
            <p class="card-text">21. August 2024</p>
            <button @click="toggleFavorite({ title: 'HouseOfTheDragon Staffel 2', date: '21. August 2024', imgSrc: 'HouseOfTheDragon.jpg' })" :class="['btn', isFavorite({ title: 'HouseOfTheDragon Staffel 2' }) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite({ title: 'HouseOfTheDragon Staffel 2' }) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
        <div class="card">
          <img src="../assets/SquidGameStaffel2.jpg" class="card-img-top" alt="Squid Game Staffel 2">
          <div class="card-body">
            <h5 class="card-title">Squid Game Staffel 2</h5>
            <p class="card-text">Dezember 2024</p>
            <button @click="toggleFavorite({ title: 'Squid Game Staffel 2', date: 'Dezember 2024', imgSrc: 'SquidGameStaffel2.jpg' })" :class="['btn', isFavorite({ title: 'Squid Game Staffel 2' }) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite({ title: 'Squid Game Staffel 2' }) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
        <div class="card">
          <img src="../assets/AgathaAllAlong.jpg" class="card-img-top" alt="Agatha All Along">
          <div class="card-body">
            <h5 class="card-title">Agatha All Along</h5>
            <p class="card-text">18. September 2024</p>
            <button @click="toggleFavorite({ title: 'Agatha All Along', date: '18. September 2024', imgSrc: 'AgathaAllAlong.jpg' })" :class="['btn', isFavorite({ title: 'Agatha All Along' }) ? 'btn-secondary' : 'btn-primary']">
              {{ isFavorite({ title: 'Agatha All Along' }) ? 'Entfavorisieren' : 'Favorisieren' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row-container">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beitrag',
  data () {
    return {
      movies: [
        { title: 'To The Moon', date: '11. Juli 2024', imgSrc: 'ToTheMoon.png' },
        { title: 'Borderlands', date: '22. August 2024', imgSrc: 'Borderlands.png' },
        { title: 'Alles Fifty Fifty', date: '29. August 2024', imgSrc: 'FührerUndVerführer.png' },
        { title: 'Führer und Verführer', date: '11. Juli 2024', imgSrc: 'AllesFiftyFifty.jpg' },
        { title: 'Zwei zu Eins', date: '25. Juli 2024', imgSrc: 'ZweiZuEins.png' }
      ],
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
    toggleFavorite (item) {
      const index = this.favorites.findIndex(fav => fav.title === item.title)
      if (index === -1) {
        this.favorites.push(item)
      } else {
        this.favorites.splice(index, 1)
      }
      this.saveFavorites()
    },
    isFavorite (item) {
      return this.favorites.some(fav => fav.title === item.title)
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
