import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/layout/index.vue'),
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
      ]
    }
  ],
  //打开新页面跳回页面顶部
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }else{
      return {top: 0}
    }
  }
})

export default router
