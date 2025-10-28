import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name:'home', component: () => import('../views/Home.vue') },
  { path: '/contact', name:'contact', component: () => import('../views/Contact.vue') },
  { path: '/lessons', children: [
    { path: 'text-interpolation', component: () => import('../views/lessons/TextInterpolation.vue') },
    { path: 'inline-templating', component: () => import('../views/lessons/InlineTemplating.vue') },
    { path: 'attribute-binding', component: () => import('../views/lessons/AttributeBinding.vue') },
    { path: 'event-binding', component: () => import('../views/lessons/EventBinding.vue') },
    { path: 'two-way-binding', component: () => import('../views/lessons/TwoWayBinding.vue') },
    { path: 'computed-properties', component: () => import('../views/lessons/ComputedProperties.vue') },
    { path: 'conditionnal-rendering', component: () => import('../views/lessons/ConditionnalRendering.vue') },
    { path: 'dynamic-styling', component: () => import('../views/lessons/DynamicStyling.vue') },
    { path: 'list-rendering', component: () => import('../views/lessons/ListRendering.vue') },
    { path: 'watchers', component: () => import('../views/lessons/Watchers.vue') }
  ] },
  { path: '/exos', children: [
    { path: 'text-interpolation', component: () => import('../views/exos/TextInterpolation.vue') },
    { path: 'data-binding', component: () => import('../views/exos/DataBinding.vue') },
    { path: 'event-binding', component: () => import('../views/exos/EventBinding.vue') },
    { path: 'computed-bug', component: () => import('../views/exos/ComputedBug.vue') },
    { path: 'watchers', component: () => import('../views/exos/Watchers.vue') },
    { path: 'dynamic-styling', component: () => import('../views/exos/DynamicStyling.vue') },
    { path: 'conditionnal-rendering', component: () => import('../views/exos/ConditionnalRendering.vue') }
  ] }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;