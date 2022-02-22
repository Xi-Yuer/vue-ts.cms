import { ref } from 'vue'
import PageContent from '@/components/page-content'
export const usePageSearch = () => {
  const searchValue = ref({})
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 更新搜索条件
  const changeSearchValue = (newValue: any) => {
    searchValue.value = newValue
    handleSearch()
  }
  // 拿到搜索条件进行搜索
  const handleSearch = () => {
    pageContentRef.value?.getPageData(searchValue.value)
  }
  return [changeSearchValue, pageContentRef, handleSearch]
}
