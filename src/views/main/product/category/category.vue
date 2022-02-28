<!--  -->
<template>
  <page-search
    :formConfig="formConfig"
    @changeSearchValue="changeSearchValue"
    @queryBtnClick="handleSearch"
  ></page-search>
  <page-content
    :tabelConfig="tabelConfig"
    pageName="category"
    ref="pageContentRef"
    @newBtnClick="handelNewBtnClick"
    @EditBtnClick="handleEditBtnClick"
  ></page-content>
  <page-modal
    :modalConfig="modalConfig"
    :EditItemData="EditItemData"
    pageName="category"
    :otherInfo="otherInfo"
    ref="pageModalRef"
  >
  </page-modal>
</template>

<script lang="ts" setup>
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig, tabelConfig, modalConfig } from './config'

// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch()
const [pageModalRef, EditItemData, handelNewBtnClick, handleEditBtnClick] =
  usePageModal() // 编辑/新建
</script>
<style lang="less" scoped></style>
