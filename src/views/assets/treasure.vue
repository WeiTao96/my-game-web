<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="text">出售物品</el-button>
      </el-form-item>
      <el-form-item>
        <el-input size="mini" placeholder="搜索名称"></el-input>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="630"
      border
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="quality" label="品质"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="type" label="分类"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Treasure extends Vue {
  private tableData = [
    {
      name: "藤盔",
      quality: "普通",
      price: "100 两",
      type: "头罩",
    },
  ];
  created() {
    console.log("aaa");
  }
}
</script>
<style lang="scss" scoped>
</style>
