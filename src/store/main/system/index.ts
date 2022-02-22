import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'

// 请求
import { getPageListData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    roleList: [],
    usersCount: 0,
    roleCount: 0
  },
  mutations: {
    chageState(state, { data, stateName }) {
      ;(state as any)[`${stateName}List`] = data.list
      ;(state as any)[`${stateName}Count`] = data.totalCount
    }
  },
  actions: {
    async getPageListAction({ commit }, { pageName, queryInfo }) {
      const pageUrl = `/${pageName}/list`
      // 发送网络请求
      const pageResult: any = await getPageListData(pageUrl, queryInfo)

      commit('chageState', { data: pageResult.data, stateName: pageName })
    }
  }
}
export default systemModule
