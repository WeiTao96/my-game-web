<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="text" @click="handleBuyANewLand()">购买土地</el-button>
      </el-form-item>
      <el-form-item>
        <el-input size="mini" placeholder="搜索名称"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" height="630" border>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="income" label="收益">
        <template v-slot="scope">+{{ scope.row.income }}/天</template>
      </el-table-column>
      <el-table-column prop="outcome" label="维护费">
        <template v-slot="scope">-{{ scope.row.outcome }}/天</template>
      </el-table-column>
      <el-table-column prop="type" label="类型">
        <template v-slot="scope">{{ scope.row.type | typeFilter }}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template v-slot="scope">{{
          scope.row.status | statusFilter
        }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button
            v-if="scope.row.type === 0"
            type="text"
            @click="handleRent(scope.row._id)"
            >出租</el-button
          >
          <el-button
            v-if="scope.row.type === 0"
            type="text"
            @click="handleBuyANewLand()"
            >建造</el-button
          >
          <el-button
            v-if="scope.row.type === 0"
            type="text"
            @click="handleBuyANewLand()"
            >出售</el-button
          >
          <el-button
            v-if="scope.row.type === 0"
            type="text"
            @click="handleBuyANewLand()"
            >出售</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getANewLand, getAllLand, handleRent } from "@/api/assets";
@Component({
  name: "Land",
  filters: {
    typeFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        "0": "基础建筑",
        "1": "收益建筑",
        "2": "功能建筑",
      };
      return statusMap[type];
    },
    statusFilter: (status: string) => {
      const statusMap: { [key: string]: string } = {
        true: "正常",
        false: "关闭",
      };
      return statusMap[status];
    },
  },
})
export default class Land extends Vue {
  private tableData = [];
  created() {
    this.getList();
  }
  private async getList() {
    const res = await getAllLand({});
    this.tableData = res.data;
    console.log(res);
  }

  private handleBuyANewLand() {
    this.$confirm("此操作将花费 3 万金钱, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      const res = await getANewLand({});
      if (res.status === 200) {
        this.$message({
          message: "购买成功",
          type: "success",
        });
        this.getList();
      } else {
        this.$message({
          message: "购买失败",
          type: "warning",
        });
      }
    });
  }

  private handleRent(id: string) {
    this.$confirm("此操作将荒地出租给农民耕种?是否确认", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      const res = await handleRent(id);
      if (res.status === 200) {
        this.$message({
          message: "出租成功",
          type: "success",
        });
        this.getList();
      } else {
        this.$message({
          message: "出租失败",
          type: "warning",
        });
      }
    });
  }
}
</script>
<style lang="scss" scoped>
</style>
