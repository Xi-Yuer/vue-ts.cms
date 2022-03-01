import Request from '../../index'
enum DashBoardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  adressGoodsSale = '/goods/address/sale'
}

export const getCategoryGoodsCount = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsCount,
    showLoading: true
  })
}
export const getCategoryGoodsSale = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsSale,
    showLoading: true
  })
}
export const getCategoryGoodsFavor = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsFavor,
    showLoading: true
  })
}
export const getAddressGoodsSale = () => {
  return Request.get<any>({
    url: DashBoardAPI.adressGoodsSale,
    showLoading: true
  })
}
export const getCategoryGoodsData = () => {
  return Request.get<any>({
    url: '/goods/amount/list',
    showLoading: true
  })
}
