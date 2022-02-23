export const tabelConfig = {
  title: '菜单列表',
  headerConfig: [
    { prop: 'name', label: '菜单名称', slotName: 'name' },
    { prop: 'type', label: '类型', slotName: 'type' },
    { prop: 'url', label: '菜单URL', slotName: 'url' },
    { prop: 'icon', label: '图标', slotName: 'icon' },
    { prop: 'permission', label: '权限', slotName: 'permission' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'operate' }
  ],
  showIndexColum: false,
  showSelectionColum: false,
  showFooter: false,
  chidrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
