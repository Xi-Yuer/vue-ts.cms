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
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import { usePageSearch } from '@/hooks/usePageSearch'

import Search from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig, tabelConfig } from './config'

// hooks
const [changeSearchValue, pageContentRef, handleSearch] = usePageSearch()
</script>
<style lang="less" scoped></style>
