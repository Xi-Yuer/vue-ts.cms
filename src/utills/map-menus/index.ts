import { IBreadcrumb } from '@/base-ui/breadcrumb/type'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 加载拥有的routes
  const allRoutes: RouteRecordRaw[] = []
  //#region
  // require.context('../router/main')该函数可以加载指定文件夹下的文件(路径,递归查找,正则匹配文件)
  const routeFiles = require.context('../../router/main', true, /\.ts/)

  // 获取所有文件的路径
  routeFiles.keys().forEach((filePath) => {
    // filePath ===> ./analysis/dashboard/dashboard.ts
    // filePath.split('.')[1] ===> /analysis/dashboard/dashboard.ts

    // 拿到每个文件中导出的对象(路由对象)
    const route = require('../../router/main' + filePath.split('.')[1])
    allRoutes.push(route.default)
  })
  //#endregion

  // 根据不同角色拥有不同菜单再从所有路由(allRoutes)中剔选出该角色的路路由
  const _recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      // menu下的type不为2时，该路由下还有子路由，需要再次递归调用
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          // 拿到该用户角色的第一个菜单路径并导出，当用户第一次登陆时，页面重定向到该路径
          firstMenu = menu
        }
      } else {
        _recurseGetRoutes(menu.children)
      }
    }
  }
  _recurseGetRoutes(userMenus)
  return routes
}

export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    // type为1表示当前菜单有children
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string): any {
  const breadcruns: IBreadcrumb[] = []
  for (const menu of userMenus) {
    // type为1表示当前菜单有children
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcruns.push({ name: menu.name }) // 父级菜单
        breadcruns.push({ name: findMenu.name, path: findMenu.url }) // 子集菜单
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  return breadcruns
}

// 获取用户权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

export function getMenuLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafKeys
}
