<!--  -->
<template>
  <div class="user">
    <search :formConfig="formConfig" @changeSearchValue="changeSearchValue" />
    <Table :dataList="userList" :headerList="headerConfig">
      <template #enable="scope">
        <el-button
          :type="scope.row ? 'primary' : 'danger'"
          plain
          size="small"
          >{{ scope.row ? '启用' : '禁用' }}</el-button
        >
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
        <el-button type="primary" plain size="small"
          ><el-icon><edit /></el-icon>修改</el-button
        >
        <el-button type="danger" plain size="small"
          ><el-icon><delete-filled /></el-icon>删除</el-button
        >
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Edit, DeleteFilled } from '@element-plus/icons-vue'

import Search from '@/components/page-search'
import Table from '@/base-ui/table'

import { formConfig, headerConfig } from './config'

const store = useStore()
// 请求页面数据
store.dispatch('systemModule/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.systemModule.userList)
// const userCount = computed(() => store.state.systemModule.userCount)

const searchValue = ref({})
const changeSearchValue = (newValue) => {
  searchValue.value = newValue
}
</script>
<style lang="less" scoped></style>
