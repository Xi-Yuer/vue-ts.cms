<!--  -->
<template>
  <div class="login-panel">
    <h1 class="title">Vue-Ts-Cms</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><user /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { Iphone, User } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { ref } from '@vue/reactivity'

const keepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref<string>('account')
const handleBtnClick = () => {
  if (currentTab.value === 'account') {
    // 账号登录
    accountRef.value?.loginAction(keepPassword)
  } else {
    // 手机登录
    phoneRef.value?.phoneLogin()
  }
}
</script>
<style lang="less" scoped>
.login-panel {
  padding: 20px;
  margin-bottom: 220px;
  width: 320px;
  text-align: center;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.login-btn {
  width: 100%;
}
</style>
