import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import request from './utils/request'
import storage from './utils/storage'
import api from './api'

// 重置css样式
import './assets/style/reset.css'
// 书写全局的css样式
import './assets/style/index.css'

// 查看环境变量：
// console.log('环境变量：', import.meta.env);

const app = createApp(App)

// 全局挂载：
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api

app
  .use(router)
  .use(store)
  .mount('#app')