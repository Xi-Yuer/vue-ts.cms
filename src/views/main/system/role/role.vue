<!--  -->
<template>
  <page-search
    :formConfig="formConfig"
    @changeSearchValue="changeSearchValue"
    @queryBtnClick="handleSearch"
  ></page-search>
  <page-content
    :tabelConfig="tabelConfig"
    pageName="role"
    ref="pageContentRef"
    @newBtnClick="handelNewBtnClick"
    @EditBtnClick="handleEditBtnClick"
  ></page-content>
  <page-modal
    :modalConfig="modalConfig"
    :EditItemData="EditItemData"
    pageName="role"
    :otherInfo="otherInfo"
    ref="pageModalRef"
  >
    <div class="menu-tree">
      <el-tree
        ref="elTreeRef"
        :data="treeData"
        @check="handelCheckChange"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
      />
    </div>
  </page-modal>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { getMenuLeafKeys } from '@/utills/map-menus'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { formConfig, tabelConfig, modalConfig } from './config'

const store = useStore()
const treeData = computed(() => store.state.entireMenu)

const otherInfo = ref({})
const elTreeRef = ref({})
// tree选择事件
const handelCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
const editCallBack = (item: any) => {
  const { menuList } = item

  const leafKeys = getMenuLeafKeys(menuList)

  // nextTick
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch()
const [pageModalRef, EditItemData, handelNewBtnClick, handleEditBtnClick] =
  usePageModal(undefined, editCallBack) // 编辑/新建
</script>
<style lang="less" scoped>
.menu-tree {
  margin-left: 80px;
}
</style>
