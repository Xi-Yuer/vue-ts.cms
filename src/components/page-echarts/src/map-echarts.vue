<!--  -->
<template>
  <Echart :options="options"></Echart>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
import Echart from '@/base-ui/echart'
import { convertData } from '../utils/convert-data'

interface PropsType {
  mapData: any[]
}

const props = withDefaults(defineProps<PropsType>(), {
  mapData: () => []
})
const options = computed(() => ({
  backgroundColor: '#fff',
  title: {
    text: '全国销量统计',
    left: 'center',
    textStyle: {
      color: 'orange'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params: any) {
      return params.name + ' : ' + params.value[2]
    }
  },
  visualMap: {
    min: 0,
    max: 60000,
    left: 20,
    bottom: 20,
    calculable: true,
    text: ['高', '低'],
    inRange: {
      color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
    },
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    roam: 'scale',
    emphasis: {
      areaColor: '#f4cccc',
      borderColor: 'rgb(9, 54, 95)',
      itemStyle: {
        areaColor: '#f4cccc'
      }
    }
  },
  series: [
    {
      name: '销量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(props.mapData),
      symbolSize: 12,
      emphasis: {
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    },
    {
      type: 'map',
      map: 'china',
      geoIndex: 0,
      aspectScale: 0.75,
      tooltip: {
        show: false
      }
    }
  ]
}))
</script>
<style lang="less" scoped></style>
