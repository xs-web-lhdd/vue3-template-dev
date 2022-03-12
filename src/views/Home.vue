<template>
  <div>
      <h1>这是主页面</h1>
      <router-link to="/welcome">去欢迎页</router-link>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const getDeptList = async () => {
  // 全局调请求接口
  const list = await proxy.$api.login({})
  deptList.value = list
}
onMounted(() => {
  getDeptList()
})
</script>


<style lang="scss">

</style>
