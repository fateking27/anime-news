<template>
  <div class="common-layout">
    <el-container>
      <el-header
        style="
          display: flex;
          align-items: center;
          position: fixed;
          z-index: 9;
          background-color: white;
          width: 100vw;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        "
        ><HeaderView
      /></el-header>
      <el-main style="margin-top: 60px">
        <MainView />
        <!-- <router-view></router-view> -->
      </el-main>
      <el-footer style="background-color: black; height: 100px"><FooterView /></el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderView from './components/HeaderView.vue'
import MainView from './components/MainView.vue'
import FooterView from './components/FooterView.vue'
</script>

<style lang="scss" scoped>
// .common-layout {
//   background: linear-gradient(-45deg, #b3e9fd, #45ecf8, #23a6d5, #74b8f8);

//   /* 使背景全屏 */
//   height: 100%;

//   /* 添加背景渐变动画 */
//   animation: gradientBG 15s ease infinite;
//   background-size: 300% 300%;
// }

// /* 定义背景渐变动画 */
// @keyframes gradientBG {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
</style>
