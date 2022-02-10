import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig } from './type' //实例的类型/配置的类型
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus/lib'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? false

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
        // 显示loading
        this.showLoading &&
          (this.loading = ElLoading.service({
            lock: true,
            text: '加载中',
            background: 'rgba(0,0,0,0.5)'
          }))
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 关闭loading
        this.showLoading && this.loading?.close()
        return res.data
      },
      (err) => {
        this.showLoading && this.loading?.close()
        return err
      }
    )
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      config.showLoading && (this.showLoading = config.showLoading)
      // 单独请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = false
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = false
          reject(err)
        })
    })
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default Request
