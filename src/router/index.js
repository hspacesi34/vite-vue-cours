import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
  {
    path: '/lessons', children: [
      { path: 'text-interpolation', name: 'Lesson Text Interpolation', component: () => import('../views/lessons/TextInterpolation.vue') },
      { path: 'inline-templating', name: 'Lesson Inline Templating', component: () => import('../views/lessons/InlineTemplating.vue') },
      { path: 'attribute-binding', name: 'Lesson Attribute Binding', component: () => import('../views/lessons/AttributeBinding.vue') },
      { path: 'event-binding', name: 'Lesson Event Binding', component: () => import('../views/lessons/EventBinding.vue') },
      { path: 'two-way-binding', name: 'Lesson Two Way Binding', component: () => import('../views/lessons/TwoWayBinding.vue') },
      { path: 'computed-properties', name: 'Lesson Computed Properties', component: () => import('../views/lessons/ComputedProperties.vue') },
      { path: 'conditionnal-rendering', name: 'Lesson Conditionnal Rendering', component: () => import('../views/lessons/ConditionnalRendering.vue') },
      { path: 'dynamic-styling', name: 'Lesson Dynamic Styling', component: () => import('../views/lessons/DynamicStyling.vue') },
      { path: 'list-rendering', name: 'Lesson List Rendering', component: () => import('../views/lessons/ListRendering.vue') },
      { path: 'watchers', name: 'Lesson Watchers', component: () => import('../views/lessons/Watchers.vue') },
      { path: 'lifecycle', name: 'Lesson Lifecycle', component: () => import('../views/lessons/Lifecycle.vue') },
      { path: 'props', name: 'Lesson Props', component: () => import('../views/lessons/Props.vue') }
    ]
  },
  {
    path: '/exos', children: [
      { path: 'text-interpolation', name: 'Exo Text Interpolation', component: () => import('../views/exos/TextInterpolation.vue') },
      { path: 'data-binding', name: 'Exo Data Binding', component: () => import('../views/exos/DataBinding.vue') },
      { path: 'event-binding', name: 'Exo Event Binding', component: () => import('../views/exos/EventBinding.vue') },
      { path: 'computed-bug', name: 'Exo Computed Bug', component: () => import('../views/exos/ComputedBug.vue') },
      { path: 'watchers', name: 'Exo Watchers', component: () => import('../views/exos/Watchers.vue') },
      { path: 'dynamic-styling', name: 'Exo Dynamic Styling', component: () => import('../views/exos/DynamicStyling.vue') },
      { path: 'conditionnal-rendering', name: 'Exo Conditionnal Rendering', component: () => import('../views/exos/ConditionnalRendering.vue') },
      { path: 'fetch', name: 'Exo Fetch', component: () => import('../views/exos/Fetch.vue') },
      { path: 'props', name: 'Exo Props', component: () => import('../views/exos/Props.vue') }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})