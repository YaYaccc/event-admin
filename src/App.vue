<script setup>
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/index'
const route = useRoute()
const goList = () => {
  console.log(route)
}

const user = useUserStore()

const open4 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error'
  })
}
</script>

<template>
  <div>
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    APP 测试
    <test-demo></test-demo>
    <el-button @click="$router.push('/home')">跳转首页</el-button>
    <el-button @click="goList">跳转列表页</el-button>

    <p>token: {{ user.token }}</p>
    <el-button @click="user.setToken('233')">设置token</el-button>
    <el-button @click="user.removeToken()">删除token</el-button>

    <el-button @click="open4">err</el-button>
  </div>
</template>

<style scoped></style>
