<!--  -->
<template>
  <div class="nav-header">
    <div @click="handleFoldChange">
      <el-icon v-if="isFold" class="icon"><fold /></el-icon>
      <el-icon v-else class="icon"><expand /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
const isFold = ref<boolean>(false)
const emits = defineEmits(['foldChange'])
// 折叠/展开
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>
<style lang="less" scoped></style>
