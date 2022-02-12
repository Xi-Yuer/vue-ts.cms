import { createStore } from 'vuex'
import LoginModule from './login'
import { IRootState } from './types' //state的类型

const store = createStore<IRootState>({
  state: {
    root: ''
  },
  mutations: {},
  actions: {},
  modules: {
    LoginModule
  }
})
export default store

// 用户刷新store初始化函数(该函数在main.ts模块中调用)
export function setupStore(): void {
  store.dispatch('LoginModule/loadLocalLoginAction')
}
