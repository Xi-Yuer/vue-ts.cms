import * as echarts from 'echarts'
import chinaMapDta from '../data/china.json'
echarts.registerMap('china', chinaMapDta)
import { EChartsOption } from 'echarts'
export const useEcharts = (el: HTMLElement) => {
  const echartsInstance = echarts.init(el, 'light', { renderer: 'svg' })
  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }
  window.addEventListener('resize', () => echartsInstance.resize())
  const setResize = () => {
    echartsInstance.resize()
  }
  return {
    echartsInstance,
    setOptions,
    setResize
  }
}
