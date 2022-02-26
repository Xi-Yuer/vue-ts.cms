<!--  -->
<template>
  <div class="user">
    <search
      :formConfig="formConfig"
      @changeSearchValue="changeSearchValue"
      @queryBtnClick="handleSearch"
    />
    <page-content
      :tabelConfig="tabelConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handelNewBtnClick"
      @EditBtnClick="handleEditBtnClick"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :EditItemData="EditItemData"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import Search from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig, tabelConfig, modalConfig } from './config'

const store = useStore()
const modalConfigRef = computed(() => {
  // 获取部门和角色数据并添加到配置中
  const departmentItem = modalConfig.formItem.find(
    (item) => item.field === 'departmentId'
  )
  const roleItem = modalConfig.formItem.find((item) => item.field === 'roleId')

  departmentItem.options = store.state.entireDepartment.map((item: any) => {
    return { title: item.name, value: item.id }
  })

  roleItem.options = store.state.entireRole.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})

// 新建的时候需要显示密码项

const newCallBack = () => {
  const passwordItem = modalConfigRef.value.formItem.find(
    (item) => item.field === 'password'
  )
  passwordItem.isHidden = false
}
// 编辑时不需要显示密码项
const editCallBack = () => {
  const passwordItem = modalConfigRef.value.formItem.find(
    (item) => item.field === 'password'
  )
  passwordItem.isHidden = true
}
// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch() //搜索
const [pageModalRef, EditItemData, handelNewBtnClick, handleEditBtnClick] =
  usePageModal(newCallBack, editCallBack) // 编辑/新建
</script>
<style lang="less" scoped></style>
