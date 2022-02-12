<!--  -->
<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="PhoneRules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="valid">
        <div class="valid">
          <el-input v-model="account.valid" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose } from 'vue'
import { PhoneRules } from '../config/account-config'
const account = reactive({
  phone: '',
  valid: ''
})
const phoneLogin = () => {
  console.log('手机登录')
}
defineExpose({
  phoneLogin
})
</script>
<style lang="less" scoped>
.login-account {
  margin-top: 10px;
  .valid {
    display: flex;
    .btn {
      margin-left: 8px;
    }
  }
}
</style>
