import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utills/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 路由导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('TOKEN')
    // 判断用户是否登录有token,没有token就自动跳转到登录页
    if (!token) {
      return '/login'
    }
  }
})
export default router
