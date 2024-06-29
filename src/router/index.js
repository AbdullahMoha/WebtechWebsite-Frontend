import { createRouter, createWebHistory } from 'vue-router'
import Favorites from '@/components/Favorites.vue'
import BeitragB from '@/components/BeitragB.vue'
import Filme from '../components/Filme.vue'
import Serien from '../components/Serien.vue'
import Spiele from '../components/Spiele.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BeitragB
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/Filme',
    name: 'Filme',
    component: Filme
  },
  {
    path: '/Serien',
    name: 'Serien',
    component: Serien
  },
  {
    path: '/Spiele',
    name: 'Spiele',
    component: Spiele
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
