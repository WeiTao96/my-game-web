<template>
  <div class="contant-box">
    <div class="follower-info" v-for="(item, index) in list" :key="index">
      <img :src="item.sex === '0' ? man_url : women_url" class="image" />
      <div class="ability-box">
        <p>血量：{{ item.ability.HP }}</p>
        <p>力量：{{ item.ability.power }}</p>
        <p>速度：{{ item.ability.speed }}</p>
        <p>防御：{{ item.ability.defense }}</p>
        <p>悟性：{{ item.ability.intelligent }}</p>
        <p>样貌：{{ item.ability.look }}</p>
        <p>忠诚：{{ item.ability.loyalty }}</p>
      </div>
      <div class="ability-box" style="width: 200px">
        <p>年龄：{{ item.age }}</p>
        <p>性别：{{ item.sex | sexFilter }}</p>
        <p>技能：</p>
        <div>
          <el-tag
            size="medium"
            style="margin: 2px"
            v-for="(initiative, index) in item.skills.initiative"
            :key="index"
            >{{ initiative.name }}</el-tag
          >
        </div>
      </div>
      <div class="name-box">
        <p style="font-size: 20px">名称：{{ item.name }}</p>
        <p style="font-size: 20px">职位：{{ item.job | jobFilter }}</p>
        <div>
          <el-button type="text">详情</el-button>
          <el-button type="text" @click="handleOpenDialog(item._id, item.job)"
            >更改职务</el-button
          >
          <el-button
            type="text"
            style="color: red"
            disabled
            @click="handleDelete(item._id)"
            >驱除出门派</el-button
          >
        </div>
      </div>
    </div>

    <el-dialog
      title="修改职务"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div class="center-dialog">
        <el-select v-model="selectPersonJob" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleChangeJob(selectPersonJob)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllPerson, updatePerson, deletePerson } from "@/api/person";

@Component({
  name: "Follower",
  filters: {
    jobFilter: (job: number) => {
      const statusMap: { [key: number]: string } = {
        10: "杂役",
        9: "外门弟子",
        8: "内门初级弟子",
        7: "内门中级弟子",
        6: "内门高级弟子",
        5: "导师",
        4: "执事",
        3: "执法",
        2: "长老",
        1: "掌门",
      };
      return statusMap[job];
    },
    sexFilter: (sex: string) => {
      const statusMap: { [key: string]: string } = {
        "0": "男",
        "1": "女",
      };
      return statusMap[sex];
    },
  },
})
export default class Follower extends Vue {
  private list = [];
  private man_url = require("@/assets/man.png");
  private women_url = require("@/assets/women.png");
  private centerDialogVisible = false;
  private selectPersonJob = 10;
  private selectPerson = "";
  private options = [
    {
      label: "杂役",
      value: 10,
    },
    {
      label: "外门弟子",
      value: 9,
    },
    {
      label: "内门初级弟子",
      value: 8,
    },
    {
      label: "内门中级弟子",
      value: 7,
    },
    {
      label: "内门高级弟子",
      value: 6,
    },
    {
      label: "导师",
      value: 5,
    },
    {
      label: "执事",
      value: 4,
    },
    {
      label: "执法",
      value: 3,
    },
    {
      label: "长老",
      value: 2,
    },
    {
      label: "掌门",
      value: 1,
    },
  ];

  created() {
    this.getList();
  }

  async getList() {
    const res = await getAllPerson({});
    this.list = res.data;
  }

  async handleOpenDialog(id: string, value: string) {
    this.selectPerson = id;
    this.selectPersonJob = Number(value);
    this.centerDialogVisible = true;
  }

  async handleDelete(id: string) {
    this.$confirm("此操作将永久驱逐其出帮派, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(async () => {
        const res = await deletePerson(id);
        if (res.status === 200) {
          this.$message({
            message: "驱逐成功",
            type: "success",
          });
          this.getList();
        } else {
          this.$message({
            message: "驱逐失败",
            type: "warning",
          });
        }
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消驱逐",
        });
      });
  }

  async handleChangeJob(value: number) {
    const res = await updatePerson(this.selectPerson, { job: value });
    if (res.status === 200) {
      this.$message({
        message: "修改成功",
        type: "success",
      });
      this.getList();
      this.centerDialogVisible = false;
    } else {
      this.$message({
        message: "修改失败",
        type: "warning",
      });
      this.centerDialogVisible = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.contant-box {
  display: flex;
  flex-wrap: wrap;
}
.follower-info {
  width: 100%;
  height: 180px;
  border: 1px solid gray;
  margin: 10px;
  display: flex;
  flex-direction: row;
  .ability-box {
    width: 150px;
    padding: 12px;
  }
  .name-box {
    text-align: center;
  }
  p {
    margin: 5px;
    font-size: 10px;
  }
}
.image {
  width: 150px;
  height: 180px;
}
.center-dialog {
  display: flex;
  justify-content: center;
}
</style>
