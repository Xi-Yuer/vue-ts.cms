import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus/lib/index'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/index.less'
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
