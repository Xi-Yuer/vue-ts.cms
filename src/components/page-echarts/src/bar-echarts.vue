<!--  -->
<template>
  <Echart :options="options"></Echart>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
import * as echarts from 'echarts'
import Echart from '@/base-ui/echart'

interface IBarData {
  xLabels: string[]
  value: any[]
}
interface PropsType {
  barData: IBarData
}

const props = withDefaults(defineProps<PropsType>(), {
  barData: () => ({})
})
const options = computed(() => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: props.barData.xLabels,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: props.barData.value
    }
  ]
}))
</script>
<style lang="less" scoped></style>
