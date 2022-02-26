import Request from '../../index'
export function getPageListData(url: string, qureyInfo: any) {
  return Request.post({
    url: url,
    showLoading: true,
    data: qureyInfo
  })
}

// url:/users/id
export function deletePageData(url: string) {
  return Request.delete<any>({
    url
  })
}

// 创建用户/角色...
export function createPageData(url: string, queryInfo: any) {
  return Request.post<any>({
    url,
    data: queryInfo
  })
}
// 编辑用户/角色..
export function editPageData(url: string, queryInfo: any) {
  return Request.patch<any>({
    url,
    data: queryInfo
  })
}
