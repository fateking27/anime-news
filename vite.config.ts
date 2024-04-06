import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
  server: {
    //@ts-ignore
    host: ['0.0.0.0'],
    cors: true,
    //跨域处理
    proxy: {
      '/bgmApi': {
        target: 'https://bgm.liumingye.cn',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/bgmApi/, '')
      }
    }
  }
})
