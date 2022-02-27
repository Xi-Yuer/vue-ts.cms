<!--  -->
<template>
  <Table
    :dataList="DataList"
    :title="tabelConfig.title"
    :headerList="tabelConfig.headerConfig"
    :showIndexColum="tabelConfig.showIndexColum"
    :showSelectionColum="tabelConfig.showSelectionColum"
    :DataCount="DataCount"
    @SelectionChange="handleSelectionChange"
    v-model:page="pageInfo"
    :chidrenProps="tabelConfig.chidrenProps"
    :showFooter="tabelConfig.showFooter"
  >
    <template #enable="scope">
      <el-button :type="scope.row ? 'primary' : 'danger'" plain size="small">{{
        scope.row ? '启用' : '禁用'
      }}</el-button>
    </template>
    <template #createAt="scope">
      <el-link type="warning" :underline="false">{{
        $filters.formatTime(scope.row.createAt)
      }}</el-link>
    </template>
    <template #updateAt="scope">
      <el-link type="warning" :underline="false">{{
        $filters.formatTime(scope.row.updateAt)
      }}</el-link>
    </template>
    <template #operate="scope">
      <el-button
        type="primary"
        plain
        size="small"
        :disabled="!isUpdate"
        @click="handleEditBtnClick(scope.row)"
      >
        <el-icon><edit /></el-icon>编辑
      </el-button>
      <el-button
        type="danger"
        plain
        size="small"
        :disabled="!isDelete"
        @click="handleDeleteCilck(scope.row)"
      >
        <el-icon><delete-filled /></el-icon>删除
      </el-button>
    </template>
    <template #header-handler>
      <el-button
        v-if="!tabelConfig.isShowAddBtn"
        type="primary"
        :disabled="!isCreate"
        @click="handleNewBtnClick"
        :icon="Plus"
        >新建
      </el-button>
    </template>
    <!-- 在page-content中动态插入剩余的插槽 -->
    <template
      v-for="slotItem in otherPropSlot"
      :key="slotItem.prop"
      #[slotItem.slotName]="scope"
    >
      <template v-if="slotItem.slotName">
        <slot :name="slotItem.slotName" :row="scope.row"></slot>
      </template>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import {
  ref,
  defineProps,
  withDefaults,
  computed,
  defineExpose,
  watch
} from 'vue'
import { useStore } from 'vuex'
import { defineEmits } from 'vue'
import { Edit, DeleteFilled, Plus } from '@element-plus/icons-vue'
import Table from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'
const emit = defineEmits(['NewBtnClick', 'EditBtnClick'])

// 权限判断
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

interface Props {
  tabelConfig: any
  pageName: string
}
const props = withDefaults(defineProps<Props>(), {
  tabelConfig: () => ({}),
  pageName: ''
})

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
// 监听到分页器数据改变去再去请求数据
watch(pageInfo, () => {
  getPageData()
})
const store = useStore()
// 请求页面数据
const getPageData = (query: any = {}) => {
  if (!isQuery) return
  store.dispatch('systemModule/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...query
    }
  })
}
getPageData()

const DataList = computed(
  () => store.state.systemModule[props.pageName + 'List']
)
const DataCount = computed(
  () => store.state.systemModule[props.pageName + 'Count']
)

// 获取一些不是公共的插槽
const otherPropSlot = props.tabelConfig?.headerConfig.filter(
  (item: any): boolean => {
    if (item.slotName === 'enable') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'operate') return false
    if (item.slotName === 'header-handler') return false
    return true
  }
)

// 删除
const handleDeleteCilck = (item: any) => {
  store.dispatch('systemModule/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id,
    query: pageInfo.value
  })
}
// 新建点击
const handleNewBtnClick = () => {
  emit('NewBtnClick')
}

// 编辑
const handleEditBtnClick = (item: any) => {
  emit('EditBtnClick', item)
}

// 选择
const handleSelectionChange = (value) => {
  console.log(value)
}
defineExpose({
  getPageData,
  pageInfo
})
</script>
<style lang="less" scoped></style>
