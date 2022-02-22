import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: '用户ID',
    rules: [],
    placeholder: '用户ID'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '用户名'
  },
  {
    field: 'realname',
    type: 'input',
    label: '真实姓名',
    rules: [],
    placeholder: '真实姓名'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '手机号',
    rules: [],
    placeholder: '手机号'
  },
  {
    field: 'enable',
    type: 'select',
    label: '用户状态',
    rules: [],
    placeholder: '用户状态',
    options: [
      {
        title: '启用',
        value: 1
      },
      {
        title: '禁用',
        value: 0
      }
    ]
  },
  {
    field: 'createAt',
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
  title: '用户列表',
  headerConfig: [
    { prop: 'id', label: '用户ID', slotName: 'id' },
    { prop: 'name', label: '用户名', slotName: 'name' },
    { prop: 'realname', label: '真实姓名', slotName: 'realname' },
    { prop: 'cellphone', label: '手机号码', slotName: 'cellphone' },
    { prop: 'enable', label: '状态', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'operate' }
  ],
  showIndexColum: true,
  showSelectionColum: true
}
