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

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide fixed-carousel" style="position: fixed; top: 0; right: 0; bottom: 0; width: 300px;">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/dbd.jpg" class="d-block w-100" alt="Slide 1">
          <div class="carousel-caption d-none d-md-block" style="color: #fff;">
            <h5>Dead By Daylight</h5>
            <p>Videospielverfilmung</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/mgs.webp" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block" style="color: #fff;">
            <h5>Metal Gear Solid</h5>
            <p>Videospielverfilmung</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/mk2.jpg" class="d-block w-100" alt="Slide 3">
          <div class="carousel-caption d-none d-md-block" style="color: #fff;">
            <h5>Mortal Kombat 2</h5>
            <p>Videospielverfilmung</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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

.btn {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border-radius: 80px; /* Abgerundete Ecken */
  font-size: 16px; /* Schriftgröße */
  padding: 10px 20px; /* Innenabstand */
  width: 70%; /* Schaltflächen nehmen 70% der Breite der Karte ein */
  box-sizing: border-box; /* Verhindert, dass Padding die Gesamtbreite beeinflusst */
  margin-top: 5px; /* Abstand zum oberen Inhalt */
  transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Übergangseffekte */
  position: relative; /* Relative Positionierung für die Top-Offset */
  left: 50%; /* Zentrieren */
  transform: translateX(-50%); /* Korrigieren Sie die Zentrierung */
  top: -10px; /* 10px nach oben verschieben */
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
  display: flex; /* Flexbox aktivieren */
  flex-direction: column; /* Vertikale Ausrichtung */
  justify-content: space-between; /* Platz gleichmäßig verteilen */
  flex: 0 0 auto; /* Verhindert das Schrumpfen der Karten */
  width: 200px; /* Feste Breite der Karten */
  box-sizing: border-box;
  background-color: #ffffff; /* Hintergrundfarbe der Karten */
  color: #333; /* Textfarbe der Karten */
  border: 1px solid #383737; /* Randfarbe der Karten */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Schatten der Karten */
}

.card-body {
  display: flex; /* Flexbox aktivieren */
  flex-direction: column; /* Vertikale Ausrichtung */
  justify-content: space-between; /* Platz gleichmäßig verteilen */
  flex-grow: 1; /* Nimmt den verfügbaren Platz ein */
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

.fixed-carousel {
  z-index: 1000; /* Stellt sicher, dass das Carousel über anderen Inhalten liegt */
  background-color: #383737; /* Hintergrundfarbe des Carousels */
  padding: 20px; /* Innenabstand des Carousels */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Schatten des Carousels */
}

/* Stil für den Carousel-Text */
.carousel-caption {
  position: absolute;
  bottom: 0px; /* Ändern Sie die Position des Textes von unten */
  left: 50%; /* Zentrieren Sie den Text horizontal */
  transform: translateX(-50%); /* Zentrieren Sie den Text relativ zum Carousel */
  text-align: center; /* Zentrieren Sie den Text innerhalb seines Containers */
  width: 100%; /* Breite des Carousel-Textes */
  background-color: rgba(255, 255, 255, 0.7); /* Hintergrundfarbe des Textcontainers */
  padding: 10px; /* Innenabstand des Textcontainers */
}

.carousel-caption h5,
.carousel-caption p {
  color: #333;
}
</style>
