import { IFormItem } from '@/base-ui/form/src/types'
const searchConfig: IFormItem[] = [
  {
    field: 'categoryId',
    type: 'input',
    label: '商品ID',
    rules: [],
    placeholder: '商品ID'
  },
  {
    field: 'status',
    type: 'select',
    label: '商品状态',
    rules: [],
    placeholder: '商品状态',
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
  title: '商品列表',
  headerConfig: [
    { prop: 'id', label: '商品ID', slotName: 'id', width: '80' },
    { prop: 'desc', label: '描述', slotName: 'desc' },
    { prop: 'oldPrice', label: '原价', slotName: 'oldPrice', width: '80' },
    { prop: 'newPrice', label: '现价', slotName: 'newPrice', width: '80' },
    { prop: 'imgUrl', label: '图片预览', slotName: 'imgUrl' },
    { prop: 'favorCount', label: '收藏', slotName: 'favorCount', width: '80' },
    { prop: 'saleCount', label: '销量', slotName: 'saleCount', width: '80' },
    { prop: 'status', label: '状态', slotName: 'enable', width: '80' },
    { prop: 'address', label: '地址', slotName: 'address', width: '80' },
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
      field: 'desc',
      type: 'input',
      label: '描述',
      rules: [],
      placeholder: '描述'
    },
    {
      field: 'name',
      type: 'input',
      label: '名字',
      rules: [],
      placeholder: '名字'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      rules: [],
      placeholder: '现价'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      rules: [],
      placeholder: '原价'
    },
    {
      field: 'address',
      type: 'input',
      label: '生产地址',
      rules: [],
      placeholder: '生产地址'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '图片地址',
      rules: [],
      placeholder: '图片地址'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      rules: [],
      placeholder: '地址'
    },
    {
      field: 'favorCount',
      type: 'input',
      label: '收藏',
      rules: [],
      placeholder: '收藏'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      rules: [],
      placeholder: '库存'
    },
    {
      field: 'saleCount',
      type: 'input',
      label: '销量',
      rules: [],
      placeholder: '销量'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      rules: [],
      placeholder: '状态',
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
    }
  ],
  colLayout: { span: 24 }
}
