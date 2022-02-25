import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'

// 请求
import { getPageListData, deletePageData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    roleList: [],
    goodsList: [],
    menuList: [],
    categoryList: [],
    searchValue: {},
    usersCount: 0,
    roleCount: 0,
    goodsCount: 0,
    menuCount: 0,
    categoryCount: 0
  },
  mutations: {
    chageState(state, { data, stateName }) {
      ;(state as any)[`${stateName}List`] = data.list
      ;(state as any)[`${stateName}Count`] = data.totalCount
    },
    changeSearchValue(state, payload) {
      state.searchValue = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, { pageName, queryInfo }) {
      const pageUrl = `/${pageName}/list`
      // 发送网络请求
      const pageResult: any = await getPageListData(pageUrl, queryInfo)

      commit('chageState', { data: pageResult.data, stateName: pageName })
    },
    // 搜索数据
    searchValueChange({ commit }, payload) {
      commit('changeSearchValue', payload)
    },
    // 删除数据
    async deletePageDataAction({ state, dispatch }, payload: any) {
      // 获取pageName和id ===> /users/1
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      // 删除数据之后再次请求一遍数据用于更新页面
      dispatch('getPageListAction', {
        pageName,
        queryInfo: state.searchValue
      })
    }
  }
}
export default systemModule
