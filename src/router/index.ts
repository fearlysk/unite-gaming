import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
