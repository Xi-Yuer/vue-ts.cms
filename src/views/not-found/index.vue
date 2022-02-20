<!--  -->
<template>
  <div class="">
    <el-empty description="Not Found">
      <el-button type="primary" @click="Orientation">返回</el-button>
    </el-empty>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const Orientation = () => {
  router.replace('/main')
}
</script>
<style lang="less" scoped></style>
