<!--  -->
<template>
  <div class="nav-header">
    <div @click="handleFoldChange">
      <el-icon v-if="isFold" class="icon"><fold /></el-icon>
      <el-icon v-else class="icon"><expand /></el-icon>
    </div>
    <div class="content">
      <div><nav-bread-crumb :breadcrumbs="breadcrumbs" /></div>
    </div>
    <div class="">
      <nav-user />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { pathMapBreadcrumbs } from '@/utills/map-menus'

// import { useEcharts } from '@/base-ui/echart/hooks/useEcharts'
// const { setResize } = useEcharts()

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

import NavUser from './nav-user'
import NavBreadCrumb from '@/base-ui/breadcrumb'

const isFold = ref<boolean>(false)
const emits = defineEmits(['foldChange'])

// 折叠/展开
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
  // setResize()
}

// 面包屑数据 [{name:xxx,path:xxx},{name:xxx,path:xxx}]
// 计算属性拿到面包屑数据
const breadcrumbs = computed(() => {
  // 拿到用户的菜单
  const userMenus = store.state.LoginModule.userMenus
  // 拿到当前路径
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  align-content: center;
  width: 100%;
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-bettween;
    align-items: center;
  }
}
</style>
