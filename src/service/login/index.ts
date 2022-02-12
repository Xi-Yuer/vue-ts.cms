import Request from '../index'
import { IAccount } from './types'
import { AxiosPromise } from 'axios'
enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role' //用法：'/role/${id}/menu'
}
// 用户登录拿到token
export function accountLoginRequest(account: IAccount): AxiosPromise {
  return Request.post<any>({
    url: LoginAPI.AccountLogin,
    showLoading: true,
    data: account
  })
}
// 请求用户信息
export function UserInfoByIDRequest(id: number): any {
  return Request.get({
    url: LoginAPI.UserInfo + id
  })
}
// 请求用户拥有哪些菜单
export function UserMenusByRoleIDRequest(id: number): AxiosPromise {
  return Request.get<any>({
    url: `${LoginAPI.UserMenus}/${id}/menu`
  })
}
