import { createApp } from 'vue'
// UI
import ElementPlus from 'element-plus'
import { ElIcon } from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/packages/theme-chalk/src/index.scss' // 解决icon不显示问题
// 路由
import router from './router/index.ts'
// Vuex
import store from './store/index.ts'
// 入口
import App from './App.vue'

createApp(App).use(router).use(store).use(ElementPlus).use(ElIcon).mount('#app')
