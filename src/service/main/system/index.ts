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
