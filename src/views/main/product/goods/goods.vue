<!--  -->
<template>
  <page-search
    :formConfig="formConfig"
    @changeSearchValue="changeSearchValue"
    @queryBtnClick="handleSearch"
  ></page-search>
  <page-conntent
    :tabelConfig="tabelConfig"
    pageName="goods"
    ref="pageContentRef"
    @newBtnClick="handelNewBtnClick"
    @EditBtnClick="handleEditBtnClick"
  >
    <template #newPrice="scope">
      <el-icon color="red"><price-tag /></el-icon
      >{{ `￥${scope.row.newPrice}` }}
    </template>
    <template #oldPrice="scope">
      <el-icon color="#66b1ff"><price-tag /></el-icon
      >{{ `￥${scope.row.oldPrice}` }}
    </template>
    <template #imgUrl="scope">
      <el-image
        style="width: 80px; height: 100px; position: relative"
        :preview-src-list="[scope.row.imgUrl]"
        :src="scope.row.imgUrl"
        fit="contain"
      >
      </el-image>
    </template>
  </page-conntent>
  <page-modal
    :modalConfig="modalConfig"
    :EditItemData="EditItemData"
    pageName="goods"
    :otherInfo="otherInfo"
    ref="pageModalRef"
  >
  </page-modal>
</template>

<script lang="ts" setup>
import { PriceTag } from '@element-plus/icons-vue'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import PageSearch from '@/components/page-search'
import PageConntent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig, tabelConfig, modalConfig } from './config'
// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch()
const [pageModalRef, EditItemData, handelNewBtnClick, handleEditBtnClick] =
  usePageModal() // 编辑/新建
</script>
<style lang="less" scoped></style>
