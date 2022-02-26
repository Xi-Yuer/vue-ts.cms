import { ref } from 'vue'
import PageModal from '@/components/page-modal'
export const usePageModal = (
  newCallBack?: () => void,
  editCallBack?: () => void
) => {
  const EditItemData = ref({})
  // 新建
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handelNewBtnClick = () => {
    EditItemData.value = {}
    pageModalRef.value.dialogVisible = true
    newCallBack && newCallBack()
  }
  // 编辑
  const handleEditBtnClick = (item: any) => {
    EditItemData.value = { ...item }
    pageModalRef.value.dialogVisible = true
    editCallBack && editCallBack()
  }
  return [pageModalRef, EditItemData, handelNewBtnClick, handleEditBtnClick]
}
