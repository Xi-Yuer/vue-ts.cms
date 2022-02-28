<!--  -->
<template>
  <div ref="eRef" class="eRef" :style="style"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { useEcharts } from '../hooks/useEcharts.ts'

import { Istyle } from './type.ts'
import { EChartsOption } from 'echarts'

interface Props {
  options: EChartsOption
  style?: Istyle
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
  style: () => ({ width: '100%', height: '360px' })
})

const eRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(eRef.value)
  watchEffect(() => setOptions(props.options))
})
</script>
<style lang="less" scoped></style>
