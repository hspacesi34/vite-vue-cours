import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name:'home', component: () => import('../views/Home.vue') },
  { path: '/contact', name:'contact', component: () => import('../views/Contact.vue') },
  { path: '/lessons', children: [
    { path: 'text-interpolation', component: () => import('../views/lessons/TextInterpolation.vue') },
    { path: 'inline-templating', component: () => import('../views/lessons/InlineTemplating.vue') },
    { path: 'attribute-binding', component: () => import('../views/lessons/AttributeBinding.vue') }
  ] },
  { path: '/exos', children: [
    { path: 'text-interpolation', component: () => import('../views/exos/TextInterpolation.vue') },
    { path: 'data-binding', component: () => import('../views/exos/DataBinding.vue') }
  ] }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;