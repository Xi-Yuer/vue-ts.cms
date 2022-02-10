<!--  -->
<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="AccountRules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { AccountRules } from '../config/account-config'
const account = reactive({
  name: '',
  password: ''
})
</script>
<style lang="less" scoped>
.login-account {
  margin-top: 10px;
}
</style>
