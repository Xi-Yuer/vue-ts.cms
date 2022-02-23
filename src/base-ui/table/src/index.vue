<!--  -->
<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="chidrenProps"
    >
      <!-- 显示序号 -->
      <el-table-column
        v-if="showSelectionColum"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColum"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="headerItem in headerList" :key="headerItem.prop">
        <el-table-column
          v-bind="headerItem"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="headerItem.slotName" :row="scope.row[headerItem.prop]">
              {{ scope.row[headerItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[5, 10, 15, 20]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="DataCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue'
const emit = defineEmits(['SelectionChange', 'update:page'])

interface Props {
  dataList: any[]
  headerList: any[]
  showIndexColum: boolean
  showSelectionColum: boolean
  title: string
  showFooter: boolean
  DataCount: number
  page: any
  chidrenProps: any
}

const props = withDefaults(defineProps<Props>(), {
  dataList: () => [],
  headerList: () => [],
  showIndexColum: false,
  showSelectionColum: false,
  title: '',
  showFooter: true,
  DataCount: 0,
  page: () => ({ currentPage: 0, pageSize: 10 }),
  chidrenProps: () => ({})
})
// 选择
const handleSelectionChange = (value: any) => {
  emit('SelectionChange', value)
}
// 分页器
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
</script>
<style lang="less" scoped>
.table {
  padding: 20px;
  border-top: 20px solid #f5f5f5f5;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  algin-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
