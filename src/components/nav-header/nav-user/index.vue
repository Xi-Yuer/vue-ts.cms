<!--  -->
<template>
  <div class="user">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="35" :src="avatarURL"></el-avatar>
        <span>{{ name }}</span></span
      >
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="toUserInfo">
            <el-icon><user /></el-icon>用户信息
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><setting /></el-icon>系统管理
          </el-dropdown-item>
          <el-dropdown-item @click="signOut">
            <el-icon><remove-filled /></el-icon>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { User, Setting, RemoveFilled } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore()
const name = computed(() => store.state.LoginModule.userInfo.name)
const avatarURL =
  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'

const toUserInfo = () => {
  console.log('用户信息')
}
const signOut = () => {
  console.log('退出登录')
}
</script>
<style lang="less" scoped>
.user {
  margin-right: 30px;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
