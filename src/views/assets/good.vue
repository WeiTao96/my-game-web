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
      <el-table-column prop="num" label="数量"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="info" label="描述"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Good extends Vue {
  private tableData = [
    {
      name: "草药",
      num: "1000",
      price: "100 两",
      info: "可制成草药",
    },
  ];
  created() {
    console.log("aaa");
  }
}
</script>
<style lang="scss" scoped>
</style>
