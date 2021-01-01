<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="text">出售物品</el-button>
      </el-form-item>
      <el-form-item>
        <el-input size="mini" placeholder="搜索名称"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" height="630" border>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="num" label="数量"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="info" label="描述"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Good",
})
export default class Good extends Vue {
  private tableData = [
    {
      name: "草药",
      num: "1000",
      price: "100 两",
      info: "可制成草药",
    },
    {
      name: "铁矿",
      num: "888",
      price: "1000 两",
      info: "可炼制武器",
    },
  ];
  created() {
    console.log("2");
  }
}
</script>
<style lang="scss" scoped>
</style>
