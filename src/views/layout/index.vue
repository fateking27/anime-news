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
          background-color:#3b4675;
          width: 100vw;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        ">
        <HeaderView />
      </el-header>
      <el-main style="margin-top: 60px;padding: 0;">
        <div class="img" v-if="isshow" style="background-color: #1989fa;width: 100%;height: 30vh;">
          <el-image fit="cover" style="height: 100%;width: 100%;" src="https://dlink.host/wx4.sinaimg.cn/large/008sKYvhly8hng1gcv7r6j31z40u048p.jpg"></el-image>
        </div>
        <MainView />
        <!-- <router-view></router-view> -->
      </el-main>
      <el-footer style="background-color: black; height: 95px;z-index: 1;">
        <FooterView />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderView from './components/HeaderView.vue'
import MainView from './components/MainView.vue'
import FooterView from './components/FooterView.vue'
import { onMounted,ref } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const isshow = ref(true)
const showImg = () => {
  if(route.path == '/home'){
    isshow.value = true
  }else{
    isshow.value = false
  }
}
onMounted(()=>{
  showImg()
  console.log(route.path)
})

</script>

<!-- <style lang="scss" scoped>
.common-layout {
  background: linear-gradient(-45deg, #b3e9fd, #45ecf8, #23a6d5, #74b8f8);

  /* 使背景全屏 */
  height: 100%;

  /* 添加背景渐变动画 */
  animation: gradientBG 15s ease infinite;
  background-size: 300% 300%;
}

/* 定义背景渐变动画 */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style> -->
