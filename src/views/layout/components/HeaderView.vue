<template>
  <div class="header">
    <div class="title">
      <span style="color: rgb(92, 185, 221)">F.K</span>
      <span style="color: rgb(252, 91, 91)">.27</span>
    </div>
    <div class="tabs">
      <div v-for="item in tabs" @click="onTab(item.path)">
        <el-icon size="20" color="#409EFC">
          <component :is="item.icon"></component>
        </el-icon>&nbsp;
        <span>{{ item.tab }}</span>
      </div>
    </div>
    <div class="label">
      <div class="search">
        <label class="label13">
          <input style="font-size: 13px;" v-model="inputValue" class="inp13" type="text" required @blur="inputBlur()" ref="refInput" />
          <span class="line13"> </span>
        </label>
          <el-button @click="inputFocus()" type="text" :style="btnDis" :icon="Search" circle />
      </div>
      <!-- <div class="login" style="margin-left: 20px; margin-top: -5px">
        <button
          style="
            border-radius: 50%;
            width: 40px;
            height: 40px;
            border: 1px rgb(186, 214, 247) solid;
            background-color: rgb(177, 211, 250);
            font-family: '华文琥珀';
            color: rgb(252, 91, 91);
            cursor: pointer;
          "
        >
          登陆
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, reactive} from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const btnDis = reactive({ opacity: '0' })
const inputValue = ref('')
const refInput = ref()
const tabs = [
  { tab: "主页", icon: "HomeFilled", path: "home" },
  { tab: "每日番组放送", icon: "PictureFilled", path: "home" },
  { tab: "壁纸福利", icon: "PictureFilled", path: "home" },
  { tab: "关于本站", icon: "Setting", path: "home" }
]

const onTab = (path:any) => {
  router.push({ path: path, params: { path: path } })
}

const inputFocus = () => {
  btnDis.opacity = '1'
  refInput.value.focus()
}
const inputBlur = () => {
  if (inputValue.value) {
    btnDis.opacity = '1'
  } else {
    btnDis.opacity = '0'
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1260px;

  // height: 100vh;
  // justify-content: space-between;
  // background-color: rgb(179, 147, 147);
  .title {
    font-family: '华文琥珀';
    font-style: italic;
    font-size: 40px;
    cursor: pointer;
  }

  .tabs {
    display: flex;
    margin-left: 20px;

    div {
      color: black;
      font-family: 'YouYuan';
      font-weight: 600;
      transition: color 0.3s linear 0s;
      margin-left: 20px;
      display: flex;
      // align-items: center;
      cursor: pointer;
      // .el-icon{
      //   line-height: 30px;
      // }
    }
  }

  .tabs div:hover {
    color: #409efc;
  }

  .label {
    position: absolute;
    right: 50px;
    top: 15px;
    display: flex;

    .el-button {
      position: absolute;
      top: 0;
      right: 0px;
    }

    .label13 {
      position: relative;
    }

    .inp13 {
      width: 20px;
      height: 20px;
      line-height: 32px;
      outline-style: none;
      background-color: transparent;
      font-size: 16px;
      color: #333;
      border: 2px solid #409efc;
      border-radius: 19px;
      padding: 0 7px;
      box-sizing: border-box;
      transition: all 0.5s ease-in-out;
    }

    .line13 {
      width: 2px;
      height: 8px;
      display: block;
      background-color: #409efc;
      transform: rotate(329deg);
      position: absolute;
      left: 15px;
      top: 19px;
      // z-index: 10;
      opacity: 1;
      transition: all 0.7s ease-in-out;
    }

    .inp13:focus,
    .inp13:valid {
      width: 220px;
      height: 30px;
    }

    .inp13:focus+.line13,
    .inp13:valid+.line13 {
      width: 1px;
      height: 16px;
      left: 19px;
      top: 10px;
      opacity: 0;
      transform: rotate(360deg);
    }
  }
}
</style>
