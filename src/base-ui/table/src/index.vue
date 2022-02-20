<!--  -->
<template>
  <div class="table">
    <el-table :data="props.dataList" border style="width: 100%">
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
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface Props {
  dataList: any[]
  headerList: any[]
}

const props = withDefaults(defineProps<Props>(), {
  dataList: () => [],
  headerList: () => []
})
</script>
<style lang="less" scoped>
.table {
  padding: 20px;
  border-top: 20px solid #f5f5f5f5;
}
</style>
