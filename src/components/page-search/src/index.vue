<!--  -->
<template>
  <Form v-bind="props.formConfig" @modelValue="changeFormDate" ref="formRef">
    <template #title>
      <h2>高级检索</h2>
    </template>
    <template #footer>
      <div class="footer">
        <el-button type="warning" @click="handleResetClick">
          <el-icon><refresh-left /></el-icon>
          重置
        </el-button>
        <el-button type="primary" @click="handleSearchClick">
          <el-icon><search /></el-icon>
          搜索
        </el-button>
      </div>
    </template>
  </Form>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, ref } from 'vue'
import { RefreshLeft, Search } from '@element-plus/icons-vue'
import Form from '@/base-ui/form'

const emit = defineEmits(['changeSearchValue', 'queryBtnClick'])
const formRef = ref(null)

interface Props {
  formConfig: any
}

const props = withDefaults(defineProps<Props>(), {
  formConfig: () => ({})
})

const changeFormDate = (newValue) => {
  emit('changeSearchValue', newValue)
}
// 点击重置调用子组件中的重置函数
const handleResetClick = () => {
  formRef.value.handleRefresh()
}
// 点击搜索
const handleSearchClick = () => {
  emit('queryBtnClick')
}
</script>
<style lang="less" scoped>
.footer {
  text-align: right;
  margin-right: 50px;
}
</style>
