/* eslint-disable import/no-unresolved */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import login from '@/views/login/index.vue'
import home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: login
  },
  {
    path: '/home',
    name: 'Home',
    component: home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
