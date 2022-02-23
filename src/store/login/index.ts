import { Module } from 'vuex'
import router from '@/router'
import {
  accountLoginRequest,
  UserInfoByIDRequest,
  UserMenusByRoleIDRequest
} from '@/service/login'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utills/map-menus'
import { ILoginState, ILoginModule } from './types' //该模块的state类型和module的类型
import { IAccount } from '@/service/login/types'

import localCache from '@/utills/cache'
const loginModule: Module<ILoginState, ILoginModule> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: [],
    userPermission: []
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo.data
    },
    // 获取用户菜单
    chnageUserMenus(state, userMenus: Array<any>) {
      state.userMenus = userMenus
      // 该角色拥有的权限
      state.userPermission = mapMenusToPermissions(userMenus)

      // 路由映射
      const routes = mapMenusToRoutes(userMenus) // 用户所拥有的路由权限映射表对象

      // 将每个路由对象添加到name为Mian的子路由中去
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })

      // 动态获取路由，并将路由注册到router.main.children中
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 用户token
      const loginResult: any = await accountLoginRequest(payload)
      const { id, token } = loginResult?.data
      localCache.setCache('TOKEN', token)
      commit('changeToken', token)

      // 用户信息
      const userInfoResult = await UserInfoByIDRequest(id)
      commit('changeUserInfo', userInfoResult)
      localCache.setCache('USER_INFO', userInfoResult)

      // 用户拥有的菜单
      const userMenusResult = await UserMenusByRoleIDRequest(
        userInfoResult?.data?.role?.id
      )
      commit('chnageUserMenus', userMenusResult?.data)
      localCache.setCache('USER_MENUS', userMenusResult?.data)

      // 登录成功，跳转首页
      router.push('/main')
    },
    // 初始化store
    loadLocalLoginAction({ commit }) {
      const TOKEN = localCache.getCache('TOKEN')
      if (TOKEN) {
        commit('changeToken', TOKEN)
      }

      const USER_INFO = localCache.getCache('USER_INFO')
      if (USER_INFO) {
        commit('changeUserInfo', USER_INFO)
      }

      const USER_MENUS = localCache.getCache('USER_MENUS')
      if (USER_MENUS) {
        commit('chnageUserMenus', USER_MENUS)
      }
    }
  }
}
export default loginModule
