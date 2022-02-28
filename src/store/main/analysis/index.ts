import { Module } from 'vuex'
import { IDashboardState } from './type'
import { IRootState } from '../../types'

import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getCategoryGoodsData
} from '@/service/main/analysis'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    adressGoodsSale: [],
    goodsDataResult: []
  },
  mutations: {
    changeState(state, payload) {
      const {
        goodsCountResult,
        goodsSaleResult,
        goodsFavorResult,
        addressGoodsSaleResult,
        goodsDataResult
      } = payload
      state.categoryGoodsCount = goodsCountResult.data
      state.categoryGoodsSale = goodsSaleResult.data
      state.categoryGoodsFavor = goodsFavorResult.data
      state.adressGoodsSale = addressGoodsSaleResult.data
      state.goodsDataResult = goodsDataResult?.data
    }
  },
  actions: {
    async getDashboardAction({ commit }) {
      const goodsCountResult = await getCategoryGoodsCount()
      const goodsSaleResult = await getCategoryGoodsSale()
      const goodsFavorResult = await getCategoryGoodsFavor()
      const addressGoodsSaleResult = await getAddressGoodsSale()
      const goodsDataResult = await getCategoryGoodsData()
      commit('changeState', {
        goodsCountResult,
        goodsSaleResult,
        goodsFavorResult,
        addressGoodsSaleResult,
        goodsDataResult
      })
    }
  }
}

export default dashboardModule
