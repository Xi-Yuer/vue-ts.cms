import { createStore } from 'vuex'
import LoginModule from './login'
import systemModule from './main/system'
import { IRootState } from './types' //state的类型

import { getPageListData } from '@/service/main/system'

const store = createStore<IRootState>({
  state: {
    root: '',
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  },
  mutations: {
    chnageDepartmentList(state, payload) {
      state.entireDepartment = payload
    },
    chnageRoleList(state, payload) {
      state.entireRole = payload
    },
    chnageMenuList(state, payload) {
      state.entireMenu = payload
    }
  },
  actions: {
    async getInitialData({ commit }) {
      // 请求部门/角色数据
      const departmentResult: any = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const roleResult: any = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      // 请求菜单数据
      const menuResult: any = await getPageListData('/menu/list', {})
      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data
      const { list: menuList } = menuResult.data
      commit('chnageDepartmentList', departmentList)
      commit('chnageRoleList', roleList)
      commit('chnageMenuList', menuList)
    }
  },
  modules: {
    LoginModule,
    systemModule
  }
})
export default store

// 用户刷新store初始化函数(该函数在main.ts模块中调用)
export function setupStore(): void {
  store.dispatch('LoginModule/loadLocalLoginAction')
}
