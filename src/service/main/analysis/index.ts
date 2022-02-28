import Request from '../../index'
enum DashBoardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  adressGoodsSale = '/goods/address/sale'
}

export const getCategoryGoodsCount = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsCount
  })
}
export const getCategoryGoodsSale = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsSale
  })
}
export const getCategoryGoodsFavor = () => {
  return Request.get<any>({
    url: DashBoardAPI.categoryGoodsFavor
  })
}
export const getAddressGoodsSale = () => {
  return Request.get<any>({
    url: DashBoardAPI.adressGoodsSale
  })
}
export const getCategoryGoodsData = () => {
  return Request.get<any>({
    url: '/goods/amount/list'
  })
}
