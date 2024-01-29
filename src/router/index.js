import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: () => import('../views/CatalogoView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/PokemonFavoritos.vue')
    },
    {
      path: '/pokemon/:id',
      component: () => import('../views/PokemonDetail.vue')
    }
  ]
})

export default router
