<!--  -->
<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ props.title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="props.dataList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 显示序号 -->
      <el-table-column
        v-if="props.showSelectionColum"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="props.showIndexColum"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="headerItem in props.headerList" :key="headerItem.prop">
        <el-table-column v-bind="headerItem" align="center">
          <template #default="scope">
            <slot :name="headerItem.slotName" :row="scope.row[headerItem.prop]">
              {{ scope.row[headerItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue'
const emit = defineEmits(['SelectionChange'])

interface Props {
  dataList: any[]
  headerList: any[]
  showIndexColum: boolean
  showSelectionColum: boolean
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  dataList: () => [],
  headerList: () => [],
  showIndexColum: false,
  showSelectionColum: false,
  title: ''
})
// 选择
const handleSelectionChange = (value: any) => {
  emit('SelectionChange', value)
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
