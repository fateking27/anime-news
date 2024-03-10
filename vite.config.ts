import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import path from 'node:path'
//@ts-ignore
// import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postCssPxToRem({
  //         // 自适应，px>rem转换
  //         rootValue: 16,
  //         propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
  //         selectorBlackList: ['norem'] // 过滤掉norem-开头的class，不进行rem转换
  //       })
  //     ]
  //   }
  // },
  server: {
    //@ts-ignore
    host: ['0.0.0.0'],
    cors: true,
    //跨域处理
  //   proxy: {
  //     '/bgmApi': {
  //       target: 'https://api.bgm.tv',
  //       changeOrigin: true,
  //       secure: true,
  //       rewrite: (path) => path.replace(/^\/bgmApi/, '')
  //     }
  //   }
  }
})
