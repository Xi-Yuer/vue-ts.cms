import type { AxiosRequestConfig, AxiosResponse } from 'axios' //实例的类型/配置的类型
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
export interface RequestInterceptors extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: any) => any
  responsetInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
  headers?: any
  loading?: LoadingInstance
  showLoading?: boolean
}
