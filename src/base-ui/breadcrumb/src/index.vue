<!--  -->
<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <el-breadcrumb-item :to="{ path: breadcrumb.path }">{{
          breadcrumb.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps, withDefaults } from 'vue'

import type { IBreadcrumb } from '../type'
interface Props {
  breadcrumbs: IBreadcrumb[]
}

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => []
})
</script>
<style lang="less" scoped></style>
