import Request from '../../index'
export function getPageListData(url: string, qureyInfo: any) {
  return Request.post({
    url: url,
    data: qureyInfo
  })
}
