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
  pieData: IPieData[]
}

const props = withDefaults(defineProps<PropsType>(), {
  pieData: () => []
})
const options = computed(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '分类数据',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: props.pieData
    }
  ]
}))
</script>
<style lang="less" scoped></style>
