import type { AxiosRequestConfig, AxiosResponse } from 'axios' //实例的类型/配置的类型
export interface RequestInterceptors extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responsetInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
