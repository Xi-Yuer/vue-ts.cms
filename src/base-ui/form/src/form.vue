<!--  -->
<template>
  <div class="form">
    <div class="header">
      <slot name="title"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in props.formItem" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formDate[`${item.field}`]"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formDate[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formDate[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  withDefaults,
  ref,
  watch,
  defineEmits,
  defineExpose
} from 'vue'
import { useStore } from 'vuex'
import { IFormItem } from './types'

export interface PropsType {
  formItem?: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
  modelValue?: any
}

const props = withDefaults(defineProps<PropsType>(), {
  formItem: () => [],
  labelWidth: '100px',
  itemStyle: () => ({ padding: '10px 40px' }),
  colLayout: () => ({
    xl: 6, // >1920px 显示四个
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }),
  modelValue: () => ({}),
  formData: () => ({})
})

const emit = defineEmits(['modelValue'])
const store = useStore()
const formDate = ref({ ...props.modelValue })

// 当数据发生改变时将组件中的数据传递出去
watch(
  formDate,
  (newValue) => {
    emit('modelValue', newValue)
    store.dispatch('systemModule/searchValueChange', newValue)
  },
  {
    deep: true
  }
)
// 重置函数
const handleRefresh = () => {
  formDate.value = {}
}
defineExpose({
  handleRefresh
})
</script>
<style lang="less" scoped>
.form {
  padding: 22px 0;
}
</style>
