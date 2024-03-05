import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/layout/Main/index.vue'
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
          path:'/',
          name: 'Main',
          component: Main,
          children: [
            {
              path: 'home',
              name: 'Home',
              component: () => import('@/views/layout/Main/Home/index.vue')
            },
            {
              path: 'details',
              name: 'Details',
              component: () => import('@/views/layout/Main/Details/index.vue')
            },
            {
              path: 'pictures',
              name: 'Pictures',
              component: () => import('@/views/layout/Main/Pictures/index.vue')
            },
            {
              path: 'downloads',
              name: 'Downloads',
              component: () => import('@/views/layout/Main/Downloads/index.vue')
            }
          ]
        },
        {
          path: '/404',
          name: 'NotFound',
          component: () => import('@/views/layout/Main/NotFound404/index.vue')
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
