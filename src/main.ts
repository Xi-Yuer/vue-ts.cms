import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from '@/store' //store用户刷新或第一次初始化
import ElementPlus from 'element-plus/lib/index'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/index.less'

setupStore()
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
