import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'details',
          name: 'Details',
          component: () => import('@/views/Details/index.vue')
        },
        {
          path: 'animeDetails',
          name: 'animeDetails',
          component: () => import('@/views/AnimeDetails/index.vue')
        },
        {
          path: 'pictures',
          name: 'Pictures',
          component: () => import('@/views/Pictures/index.vue')
        },
        {
          path: 'animeCalendar',
          name: 'AnimeCalendar',
          component: () => import('@/views/AnimeCalendar/index.vue')
        },
        {
          path: 'downloads',
          name: 'Downloads',
          component: () => import('@/views/Downloads/index.vue')
        },
        {
          path: '/404',
          name: 'NotFound',
          component: () => import('@/views/NotFound404/index.vue')
        },
        {
          path: '/:pathMatch(.*)',
          redirect: '/404'
        }
      ]
    }
  ],
  //打开新页面跳回页面顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
