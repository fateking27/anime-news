import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/tailwind.css";

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'moment/dist/locale/zh-cn'
//@ts-ignore
// import 'amfe-flexible'

//引入图片懒加载插件
import Lazyload from "vue3-lazyload"


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn,
  })

app.use(Lazyload,{
  loading: '',
  error: ''
})

app.use(createPinia())
app.use(router)

app.mount('#app')
