import { createRouter, createWebHistory } from 'vue-router'
import PWA from '../pages/PWA.vue'
import IOS from '@/pages/IOS.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PWA',
      component: PWA,
    },

    {
      path: '/IOS',
      name: 'IOS',
      component: () => import('../pages/IOS.vue'),
    },

    {
      path: '/Android',
      name: 'Android',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Android.vue'),
    },
  ],
})

export default router
