import type { AxiosRequestConfig, AxiosResponse } from 'axios' //实例的类型/配置的类型
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responsetInterceptorCatch?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  headers?: any
  loading?: LoadingInstance
  showLoading?: boolean
}
