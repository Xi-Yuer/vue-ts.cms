<!--  -->
<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
