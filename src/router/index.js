import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name:'home', component: () => import('../views/Home.vue') },
  { path: '/contact', name:'contact', component: () => import('../views/Contact.vue') },
  { path: '/lessons/text-interpolation', component: () => import('../views/lessons/TextInterpolation.vue') },
  { path: '/exos/text-interpolation', component: () => import('../views/exos/TextInterpolation.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;