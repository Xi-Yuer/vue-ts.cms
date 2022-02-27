import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'parentId',
    type: 'input',
    label: 'ID',
    rules: [],
    placeholder: '部门ID'
  },
  {
    field: 'name',
    type: 'input',
    label: '部门名称',
    rules: [],
    placeholder: '用户名'
  },
  {
    field: 'leader',
    type: 'input',
    label: '上级部门',
    rules: [],
    placeholder: '上级部门'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '手机号',
    rules: [],
    placeholder: '手机号'
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
  title: '部门列表',
  headerConfig: [
    { prop: 'id', label: '用户ID', slotName: 'id' },
    { prop: 'name', label: '用户名', slotName: 'name' },
    { prop: 'leader', label: 'leader', slotName: 'leader' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'operate' }
  ],
  showIndexColum: true,
  showSelectionColum: true
}

export const modalConfig = {
  formItem: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '用户名'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      rules: [],
      placeholder: '部门领导'
    }
  ],
  colLayout: { span: 24 }
}
