import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utills/cache'
// 当前用户角色的第一个菜单
import { firstMenu } from '@/utills/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/not-found/index.vue')
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
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
