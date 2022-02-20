import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'

// 请求
import { getPageListData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    userList: [],
    userCount: []
  },
  mutations: {
    chnageUserList(state, payload) {
      state.userList = payload.list
      state.userCount = payload.totalCount
    }
  },
  actions: {
    async getPageListAction({ commit }, { pageUrl, queryInfo }) {
      // 发送网络请求
      const pageResult: any = await getPageListData(pageUrl, queryInfo)
      commit('chnageUserList', pageResult.data)
    }
  }
}
export default systemModule
