<!--  -->
<template>
  <Echart :options="options"></Echart>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
import Echart from '@/base-ui/echart'

interface ILineData {
  xLabels: string[]
  value: any[]
}
interface PropsType {
  lineData: ILineData
}

const props = withDefaults(defineProps<PropsType>(), {
  lineData: () => ({})
})
const options = computed(() => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.lineData.xLabels
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.lineData.value,
      type: 'line',
      areaStyle: {}
    }
  ]
}))
</script>
<style lang="less" scoped></style>
