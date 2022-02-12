<!--  -->
<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :rules="AccountRules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import { useStore } from 'vuex'
import { Elform } from 'element-plus'
import { AccountRules } from '../config/account-config'
import localCache from '@/utills/cache'

const formRef = ref<InstanceType<typeof Elform>>()
const store = useStore()
const account = reactive({
  name: localCache.getCache('NAME') ?? '',
  password: localCache.getCache('PASSWORD') ?? ''
})

const loginAction = (keepPassword: boolean) => {
  formRef.value.validate((valid) => {
    if (!valid) return
    // 是否记住密码
    if (keepPassword.value) {
      localCache.setCache('NAME', account.name)
      localCache.setCache('PASSWORD', account.password)
    } else {
      localCache.deleteCache('NAME')
      localCache.deleteCache('PASSWORD')
    }
    // 执行登录
    store.dispatch('LoginModule/accountLoginAction', { ...account })
  })
}
defineExpose({
  loginAction
})
</script>
<style lang="less" scoped>
.login-account {
  margin-top: 10px;
}
</style>
