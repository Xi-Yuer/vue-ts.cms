import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig } from './type' //实例的类型/配置的类型

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例的请求拦截
    this.instance.interceptors.request.use(
      // 可选链
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 实例的响应拦截
    this.instance.interceptors.response.use(
      // 可选链
      this.interceptors?.responseInterceptor,
      this.interceptors?.responsetInterceptorCatch
    )
    // 所有实例都会有的拦截器
    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }
  request(config: RequestConfig): void {
    // 单独请求的拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
export default Request
