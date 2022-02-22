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
  >
    <template #enable="scope">
      <el-button :type="scope.row ? 'primary' : 'danger'" plain size="small">{{
        scope.row ? '启用' : '禁用'
      }}</el-button>
    </template>
    <template #createAt="scope">
      <el-link type="warning" :underline="false">{{
        $filters.formatTime(scope.row)
      }}</el-link>
    </template>
    <template #updateAt="scope">
      <el-link type="warning" :underline="false">{{
        $filters.formatTime(scope.row)
      }}</el-link>
    </template>
    <template #operate>
      <el-button type="primary" plain size="small">
        <el-icon><edit /></el-icon>修改
      </el-button>
      <el-button type="danger" plain size="small">
        <el-icon><delete-filled /></el-icon>删除
      </el-button>
    </template>
    <template #header-handler>
      <el-button type="primary">
        <el-icon><refresh-right /></el-icon>刷新
      </el-button>
      <el-button type="primary">
        <el-icon><plus /></el-icon>新建
      </el-button>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { Edit, DeleteFilled, Plus, RefreshRight } from '@element-plus/icons-vue'
import Table from '@/base-ui/table'

interface Props {
  tabelConfig: any
  pageName: string
}
const props = withDefaults(defineProps<Props>(), {
  tabelConfig: () => ({}),
  pageName: ''
})

const store = useStore()
// 请求页面数据
const getPageData = (query: any = {}) => {
  store.dispatch('systemModule/getPageListAction', {
    pageName: props.pageName,
    queryInfo: { offset: 0, size: 10, ...query }
  })
}
getPageData()

const DataList = computed(
  () => store.state.systemModule[props.pageName + 'List']
)
const DataCount = computed(
  () => store.state.systemModule[props.pageName + 'Count']
)

const handleSelectionChange = (value) => {
  console.log(value)
}
defineExpose({
  getPageData
})
</script>
<style lang="less" scoped></style>
