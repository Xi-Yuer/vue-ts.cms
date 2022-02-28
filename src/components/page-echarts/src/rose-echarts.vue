<!--  -->
<template>
  <Echart :options="options"></Echart>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
import Echart from '@/base-ui/echart'

interface IPieData {
  value: number
  name: string
}
interface PropsType {
  roseData: IPieData[]
}

const props = withDefaults(defineProps<PropsType>(), {
  roseData: () => []
})
const options = computed(() => ({
  // legend: {
  //   top: 'top'
  // },
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '商品数量',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}))
</script>
<style lang="less" scoped></style>
