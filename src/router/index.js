import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/Home.vue'
import welcome from '../views/Welcome.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: home
  },
  {
    name: 'welcome',
    path: '/welcome',
    meta: {
      title: '欢迎页'
    },
    component: welcome
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航守卫
// router.beforeEach((to, from, next) => {
//   // 做路由管理：
// })

export default router