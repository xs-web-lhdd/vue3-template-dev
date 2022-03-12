/**
 * @description vueX状态管理
 * @author 凉风有信、
 */

import { createStore } from 'vuex'
// vuex 每次页面刷新的时候，数据全部丢失，数据全部存储在js内存中，页面刷新内存会销毁，所以数据丢失
// vuex 不会持久化存储，所以需要配合 localStorage 进行持久化存储：
import storage from './../utils/storage'
export default createStore({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
   }
})
 