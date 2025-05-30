<!--  -->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!props.isCollaps" class="title">Vue3 + Ts</span>
    </div>
    <el-menu
      :collapse="props.isCollaps"
      unique-opened
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#001529"
      text-color="#b7bdc3"
      acticve-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i
                class="icon"
                v-if="item.icon"
                :class="'iconfont icon-' + item.icon"
              ></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单里的子菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleItemClick(subItem)"
              >
                <template #title>
                  <i v-if="subItem.icon" :class="subItem.icon"></i>
                  <span>{{ subItem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { pathMapToMenu } from '@/utills/map-menus'

interface PropsType {
  isCollaps: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  isCollaps: false
})

// 路由跳转
const router = useRouter()
const route = useRoute()
const store = useStore()
const userMenus = computed(() => store.state.LoginModule.userMenus)
// 当前路径
const currentPath = route.path
// 当前菜单
const menu = pathMapToMenu(userMenus.value, currentPath)

const defaultValue = ref(menu.id + '')

const handleItemClick = (item: any) => {
  router.push(item.url)
}
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
