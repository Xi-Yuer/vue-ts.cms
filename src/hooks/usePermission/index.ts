import { useStore } from 'vuex'
export const usePermission = (pageName: string, hanldeName: string) => {
  const permissions = useStore().state.LoginModule.userPermission
  const verifyPermission = `system:${pageName}:${hanldeName}`
  // 当用户拥有该权限时，返回true,反之
  return !!permissions.find((item: any) => item === verifyPermission)
}
