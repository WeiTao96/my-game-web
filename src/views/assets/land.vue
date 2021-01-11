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
            @click="handleBuild(scope.row._id)"
            >建造</el-button
          >
          <el-button
            v-if="scope.row.type === 0"
            type="text"
            @click="handleSell(scope.row._id)"
            >出售</el-button
          >
          <el-button
            v-if="scope.row.type === 1 && scope.row.s_type === 1"
            type="text"
            @click="handleRecover(scope.row._id)"
            >回收</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="建造建筑"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div class="center-dialog">
        <el-cascader
          :options="options"
          @change="handleChange"
          :show-all-levels="false"
        ></el-cascader>
      </div>
      <p>{{ buildValue | buildInfoFilter }}</p>
      <p v-if="buildValue">花费：{{ buildValue | buildSpendFilter }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getANewLand,
  getAllLand,
  handleRent,
  handleRecover,
  handleDelete,
} from "@/api/assets";
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
    buildInfoFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        hospital: "建立医馆，为周围群众治疗疾病，帮众恢复速度增加 20 %",
        bar: "建立酒馆为路过百姓提供歇息，帮众每日好感增加 1",
        gym: "为帮众提供练功场所",
        smithy: "开启装备打造功能",
      };
      return statusMap[type];
    },
    buildSpendFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        hospital: "200000",
        bar: "150000",
        gym: "50000",
        smithy: "100000",
      };
      return statusMap[type];
    },
  },
})
export default class Land extends Vue {
  private tableData = [];
  private buildValue = "";
  private centerDialogVisible = false;
  private selectId = "";
  private options = [
    {
      value: "income",
      label: "收益建筑",
      children: [
        {
          value: "hospital",
          label: "医馆",
        },
        {
          value: "bar",
          label: "酒馆",
        },
      ],
    },
    {
      value: "function",
      label: "功能建筑",
      children: [
        {
          value: "gym",
          label: "练功房",
        },
        {
          value: "smithy",
          label: "铁匠铺",
        },
      ],
    },
  ];
  created() {
    this.getList();
  }
  private async getList() {
    const res = await getAllLand({});
    this.tableData = res.data;
  }

  private async handleChange(value: string[]) {
    console.log(value);
    this.buildValue = value[1];
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

  private handleSell(id: string) {
    this.$confirm("此操作将出售获得 15000 金钱?是否确认", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      const res = await handleDelete(id);
      if (res.status === 200) {
        this.$message({
          message: "出售成功",
          type: "success",
        });
        this.getList();
      } else {
        this.$message({
          message: "出售失败",
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

  private handleRecover(id: string) {
    this.$confirm("此操作将回收农田，并给予 5000 违约金?是否确认", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(async () => {
      const res = await handleRecover(id);
      if (res.status === 200) {
        this.$message({
          message: "回收成功",
          type: "success",
        });
        this.getList();
      } else {
        this.$message({
          message: "回收失败",
          type: "warning",
        });
      }
    });
  }

  private handleBuild(id: string) {
    this.selectId = id;
    this.centerDialogVisible = true;
  }
}
</script>
<style lang="scss" scoped>
.center-dialog {
  display: flex;
  justify-content: center;
}
</style>
