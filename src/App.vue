<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const goList = () => {
  console.log(route)
}
</script>

<template>
  <div>
    APP 测试
    <test-demo></test-demo>
    <el-button @click="$router.push('/home')">跳转首页</el-button>
    <el-button @click="goList">跳转列表页</el-button>
  </div>
</template>

<style scoped></style>
