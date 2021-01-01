<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="text">购买土地</el-button>
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
      <el-table-column prop="get" label="收益"> </el-table-column>
      <el-table-column prop="spend" label="维护费"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Land extends Vue {
  private tableData = [
    {
      name: "荒地",
      get: "+100/天",
      spend: "-20/天",
      type: "基础建筑",
      status: "正常",
    },
    {
      name: "农田",
      get: "+300/天",
      spend: "-0/天",
      type: "收益建筑",
      status: "正常",
    },
    {
      name: "练功房",
      get: "+0/天",
      spend: "-200/天",
      type: "功能建筑",
      status: "正常",
    },
  ];
  created() {
    console.log("aaa");
  }
}
</script>
<style lang="scss" scoped>
</style>
