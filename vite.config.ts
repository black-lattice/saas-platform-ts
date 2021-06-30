import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 @ 指向src目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理
    proxy: {
      '/test/sfsaas': {
        // '/api':匹配项
        target: 'https://officetest2.ibroadlink.com', // 接口的域名 // secure: false,// 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: (path) => path.replace('/test/sfsaas', '/sfsaas')
      },
      '/sfsaas': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        // target: 'http://10.10.4.96:22080', //路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      },
      '/vttrigger': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        // target: 'http://10.10.4.96:22080', //路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      },
      '/vtservice': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        // target: 'http://10.10.4.96:22080', //路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      },
      '/sfadapter': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      },
      '/vtspace': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '/static')
      },
      '/plugin': {
        target: 'https://officetest2.ibroadlink.com', // 路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/commonStyle/index.scss';`
      }
    }
  }
})
