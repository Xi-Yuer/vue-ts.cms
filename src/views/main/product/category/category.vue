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
  ></page-content>
</template>

<script lang="ts" setup>
import { usePageSearch } from '@/hooks/usePageSearch'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { formConfig, tabelConfig } from './config'

// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch()
</script>
<style lang="less" scoped></style>
