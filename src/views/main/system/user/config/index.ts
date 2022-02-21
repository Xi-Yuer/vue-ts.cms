import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: 'id',
    rules: [],
    placeholder: 'id'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '用户名'
  },
  {
    field: 'password',
    type: 'password',
    label: '密码',
    rules: [],
    placeholder: '密码'
  },
  {
    field: 'gender',
    type: 'select',
    label: '性别',
    rules: [],
    placeholder: '性别',
    options: [
      {
        title: '男',
        value: '男'
      },
      {
        title: '女',
        value: '女'
      }
    ]
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
  title: '用户列表',
  headerConfig: [
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
