import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: '商品ID',
    rules: [],
    placeholder: '商品ID'
  },
  {
    field: 'name',
    type: 'input',
    label: '类别',
    rules: [],
    placeholder: '类别'
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
  title: '商品列表',
  headerConfig: [
    { prop: 'id', label: '商品ID', slotName: 'id', width: '80' },
    { prop: 'name', label: '类别', slotName: 'name' },
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
      label: '类别',
      rules: [],
      placeholder: '类别'
    }
  ],
  colLayout: { span: 24 }
}
