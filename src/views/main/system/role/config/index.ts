import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '权限名称',
    rules: [],
    placeholder: '权限名称'
  },
  {
    field: 'intro',
    type: 'input',
    label: '权限介绍',
    rules: [],
    placeholder: '权限'
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '时间',
    rules: [],
    placeholder: '时间',
    otherOptions: {
      type: 'daterange',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    }
  }
]

interface IForm {
  formItem: any[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}

export const formConfig: IForm = {
  formItem: searchConfig,
  labelWidth: '120px',
  itemStyle: { padding: '10px 40px' }
}
export const tabelConfig = {
  title: '角色列表',
  headerConfig: [
    { prop: 'name', label: '角色名', slotName: 'name' },
    { prop: 'intro', label: '权限介绍', slotName: 'realname' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'operate' }
  ],
  showIndexColum: true,
  showSelectionColum: true
}
