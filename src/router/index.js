import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Reservations from '../views/Reservations.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', redirect: '/movies' },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: Reservations
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
