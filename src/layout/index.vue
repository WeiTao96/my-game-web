<template>
  <div class="home">
    <el-container>
      <el-aside width="200px" class="left-side">
        <p>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <el-link
            class="link"
            v-for="item in menus"
            :key="item.path"
            @click="handleLink(item, item.name)"
            >{{ item.meta.title }}</el-link
          >
        </p>
        <div class="status-box">
          <p>金钱：99999</p>
          <p>弟子：99 人</p>
          <p>声望：600</p>
          <p>时间：1 年 22 日</p>
        </div>
      </el-aside>
      <el-container>
        <el-header class="containt-header">
          <p>
            <el-link
              class="link"
              v-for="(item, index) in selectMenu.children"
              :key="index"
              @click="handleLink(selectMenu, item.name)"
              >{{ item.meta.title }}</el-link
            >
          </p>
        </el-header>
        <el-main class="containt-main">
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppMain } from "./components";
import { RouteConfig } from "vue-router";
@Component({
  name: "Layout",
  components: {
    AppMain,
  },
})
export default class Home extends Vue {
  private menus = this.$router.options.routes;
  private selectMenu: RouteConfig | undefined;

  created() {
    for (const item of this.menus as RouteConfig[]) {
      const path = this.$route.fullPath.split("/");
      const itemPath = item.path.split("/");
      if (itemPath[1] === path[1]) {
        this.selectMenu = item;
      }
    }
    if (this.selectMenu === undefined && this.menus) {
      this.selectMenu = this.menus[0] as RouteConfig;
    }
  }

  handleLink(item: RouteConfig, name: string) {
    this.selectMenu = Object.assign({}, item);
    this.$forceUpdate();
    this.$router.push({ name: name });
    console.log(name);
  }
}
</script>

<style lang="scss" scoped>
.link {
  margin-left: 30px;
}
.home {
  width: 1000px;
  height: 800px;
  background: rgb(211, 209, 209);
  margin: 0 auto;
  .left-side {
    border: 2px solid gray;
    border-right: none;
    position: relative;
    .status-box {
      position: absolute;
      width: 100%;
      bottom: 0;
      p {
        margin-left: 20px;
      }
    }
  }
  .containt-header {
    background: rgb(165, 128, 128);
    border: 2px solid gray;
  }
  .containt-main {
    border: 2px solid gray;
    border-top: none;
    height: 740px;
    background: white;
  }
}
</style>
