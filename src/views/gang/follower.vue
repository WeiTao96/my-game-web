<template>
  <div class="contant-box">
    <div class="follower-info" v-for="o in 8" :key="o">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div class="ability-box">
        <p>血量：66（平平无奇）</p>
        <p>力量：16（平平无奇）</p>
        <p>速度：22（平平无奇）</p>
        <p>防御：14（平平无奇）</p>
        <p>悟性：8（平平无奇）</p>
        <p>样貌：7（平平无奇）</p>
        <p>忠诚：13（平平无奇）</p>
      </div>
      <div class="ability-box" style="width: 200px">
        <p>战斗力：304993（惊为天人）</p>
        <p>被动技能：飞龙在天</p>
      </div>
      <div class="name-box">
        <p style="font-size: 20px">李问</p>
        <p style="font-size: 20px">族长</p>
        <div>
          <el-button type="text">文字按钮</el-button>
          <el-button type="text">文字按钮</el-button>
          <el-button type="text">文字按钮</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Follower",
})
export default class Follower extends Vue {
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
</style>
