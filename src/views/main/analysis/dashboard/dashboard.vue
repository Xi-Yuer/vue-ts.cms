<!--  -->
<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="6"
        ><card title="商品总销量"
          ><h2>￥{{ Data[0]?.number1 }}</h2></card
        ></el-col
      >
      <el-col :span="6"
        ><card title="商品总收藏"
          ><h2>￥{{ Data[1]?.number1 }}</h2></card
        ></el-col
      >
      <el-col :span="6"
        ><card title="商品总库存"
          ><h2>{{ Data[2]?.number1 }}</h2></card
        ></el-col
      >
      <el-col :span="6"
        ><card title="商品总销售额"
          ><h2>￥{{ Data[3]?.number1 }}</h2></card
        ></el-col
      >
    </el-row>
    <br />
    <el-row :gutter="12">
      <el-col :span="7">
        <card title="商品分类数量(饼图)"
          ><pie-echarts :pieData="pieData"></pie-echarts
        ></card>
      </el-col>
      <el-col :span="10"><card title="商品城市销量"></card></el-col>
      <el-col :span="7"
        ><card title="商品分类数量(玫瑰图)"
          ><rose-echarts :roseData="pieData"></rose-echarts></card
      ></el-col>
    </el-row>
    <br />
    <el-row :gutter="12">
      <el-col :span="12"
        ><card title="商品销量"
          ><line-echarts :lineData="lineData"></line-echarts></card
      ></el-col>
      <el-col :span="12"
        ><card title="商品收藏"
          ><bar-echarts :barData="barData"></bar-echarts></card
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Card from '@/base-ui/card'
import {
  PieEcharts,
  RoseEcharts,
  LineEcharts,
  BarEcharts
} from '@/components/page-echarts'

const store = useStore()
store.dispatch('dashboardModule/getDashboardAction')

const pieData = computed(() =>
  store.state.dashboardModule.categoryGoodsCount.map((item) => {
    return {
      value: item.goodsCount,
      name: item.name
    }
  })
)
const lineData = computed(() => {
  const xLabels: string[] = []
  const value: any[] = []
  const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    value.push(item.goodsCount)
  }
  return { xLabels, value }
})
const barData = computed(() => {
  const xLabels: string[] = []
  const value: any[] = []
  const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    value.push(item.goodsFavor)
  }
  return { xLabels, value }
})
const Data = computed(() => {
  return store.state.dashboardModule.goodsDataResult
})
</script>
<style lang="less" scoped>
.echarts {
  height: 500px;
  width: 500px;
}
</style>
