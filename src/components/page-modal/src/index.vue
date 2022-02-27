<!--  -->
<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      :before-close="handleClose"
      destroy-on-close
    >
      <Form v-bind="modalConfig" v-model="formData"></Form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmBtnClick"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineExpose, watch } from 'vue'
import { useStore } from 'vuex'
import Form from '@/base-ui/form'

const props = defineProps({
  modalConfig: Object,
  EditItemData: Object,
  pageName: String,
  otherInfo: Object
})

const formData = ref<any>({})
const store = useStore()

watch(
  () => props.EditItemData,
  (newValue) => {
    for (const item of props.modalConfig.formItem) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

// dialog
const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
}
const handleConfirmBtnClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.EditItemData).length) {
    // 编辑
    const newEditItemData = props.EditItemData
    delete newEditItemData.createAt
    delete newEditItemData.updateAt
    store.dispatch('systemModule/editPageDataAction', {
      pageName: props.pageName,
      editInfo: {
        ...newEditItemData,
        ...store.state.systemModule.searchValue,
        ...props.otherInfo
      },
      id: props.EditItemData.id
    })
  } else {
    //新建
    store.dispatch('systemModule/createPageDataAction', {
      pageName: props.pageName,
      data: {
        ...store.state.systemModule.searchValue,
        ...props.EditItemData,
        ...props.otherInfo
      }
    })
  }
}

defineExpose({
  dialogVisible
})
</script>
<style lang="less" scoped></style>
