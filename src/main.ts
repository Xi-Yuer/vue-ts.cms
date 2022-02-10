import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus/lib/index'
import 'element-plus/dist/index.css'

import Request from './service'
Request.get({
  url: '/users/1',
  showLoading: true
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
