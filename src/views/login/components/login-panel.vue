<!--  -->
<template>
  <div class="login-panel">
    <h1 class="title">Vue-Ts-Cms</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user /></el-icon>账号登录
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, User } from '@element-plus/icons-vue'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'
</script>
<style lang="less" scoped>
.login-panel {
  padding: 20px;
  margin-bottom: 220px;
  width: 320px;
  text-align: center;
}
</style>
