import Request from './request'
import { RequestConfig } from './request/type'
export default new Request({
  // 根据环境变量设置baseUrl和timeOut
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_BASE_TIMEOUT,

  // 每个实例单独的拦截器
  interceptors: {
    requestInterceptor: (config: RequestConfig) => {
      // console.log('请求拦截')
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应拦截')
      return res
    },
    responsetInterceptorCatch: (err) => {
      // console.log('响应失败拦截')
      return err
    }
  }
})
