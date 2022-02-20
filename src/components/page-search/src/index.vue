<!--  -->
<template>
  <Form v-bind="props.formConfig" @modelValue="changeFormDate">
    <template #title>
      <h2>高级检索</h2>
    </template>
    <template #footer>
      <div class="footer">
        <el-button type="warning">
          <el-icon><refresh-left /></el-icon>
          重置
        </el-button>
        <el-button type="primary">
          <el-icon><search /></el-icon>
          搜索
        </el-button>
      </div>
    </template>
  </Form>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits } from 'vue'
import { RefreshLeft, Search } from '@element-plus/icons-vue'
import Form from '@/base-ui/form'

const emit = defineEmits(['changeSearchValue'])

interface Props {
  formConfig: any
}

const props = withDefaults(defineProps<Props>(), {
  formConfig: () => ({})
})

const changeFormDate = (newValue) => {
  emit('changeSearchValue', newValue)
}
</script>
<style lang="less" scoped>
.footer {
  text-align: right;
  margin-right: 50px;
}
</style>
