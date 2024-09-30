import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import List from '@/views/List.vue'
import Favorites from '@/views/Favorites.vue'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/list', name: 'list', component: List },
  { path: '/favorites', name: 'favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
