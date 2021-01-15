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
      <el-table-column prop="level" label="品质">
        <template v-slot="scope">
          <span :class="'level-' + scope.row.level">{{
            scope.row.level | LevelFilter
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="价格">
        <template v-slot="scope">{{
          scope.row.level | LevelPriceFilter
        }}</template>
      </el-table-column>
      <el-table-column prop="type" label="分类">
        <template v-slot="scope">{{ scope.row.type | TypeFilter }}</template>
      </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllEquipment } from "@/api/assets";
@Component({
  name: "Treasure",
  filters: {
    LevelFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        0: "普通",
        1: "珍贵",
        2: "稀有",
        3: "绝世",
        4: "传说",
      };
      return statusMap[type];
    },
    LevelPriceFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        0: "1000",
        1: "5000",
        2: "10000",
        3: "50000",
        4: "100000",
      };
      return statusMap[type];
    },
    TypeFilter: (type: string) => {
      const statusMap: { [key: string]: string } = {
        hat: "头罩",
        clothes: "上衣",
        ring: "戒指",
        talisman: "护身符",
        shoes: "鞋子",
        pants: "裤子",
        sword: "剑",
      };
      return statusMap[type];
    },
  },
})
export default class Treasure extends Vue {
  private tableData = [];
  created() {
    this.getList();
  }
  private async getList() {
    const res = await getAllEquipment({});
    this.tableData = res.data;
  }
}
</script>
<style lang="scss" scoped>
.level-0 {
  color: grey;
}
.level-1 {
  color: rgb(22, 90, 236);
}
.level-2 {
  color: rgb(167, 43, 238);
}
.level-3 {
  color: rgb(233, 164, 37);
}
.level-4 {
  color: rgb(221, 47, 47);
}
</style>
