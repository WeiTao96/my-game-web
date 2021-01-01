<template>
  <div >
    <!-- <el-container>
      <el-aside width="200px" class="left-side">边</el-aside>
      <el-container>
        <el-header class="containt-header">Header</el-header>
        <el-main class="containt-main">Main</el-main>
        <el-footer height="200px" class="containt-footer">Footer</el-footer>
      </el-container>
    </el-container> -->
    aaaa
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
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
</style>
