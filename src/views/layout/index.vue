<template>
  <div class="common-layout">
    <el-backtop :bottom="100">
      <div style="
          height: 100%;
          width: 100%;
          border-radius: 7px;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
          font-size: 14px;
        ">
        🚀
      </div>
    </el-backtop>
    <el-container>
      <el-header style="
          display: flex;
          align-items: center;
          position: fixed;
          z-index: 99;
          background-color: #3b4675;
          width: 100vw;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        ">
        <HeaderView />
      </el-header>
      <el-main style="margin-top: 60px; padding: 0">
        <MainView />
      </el-main>
      <el-footer style="background-color: black; height: 95px; z-index: 1">
        <FooterView />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderView from './components/HeaderView.vue'
import MainView from './components/MainView.vue'
import FooterView from './components/FooterView.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isshow = ref(true)
const showImg = () => {
  if (route.path == '/home') {
    isshow.value = true
  } else {
    isshow.value = false
  }
}
onMounted(() => {
  showImg()
  console.log(route.path)
})
</script>