import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
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
