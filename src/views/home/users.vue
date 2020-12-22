<template>
  <div>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-button>添加用户</el-button>
      用户管理
    </el-card>

    <el-card>
      <el-table :data="users.usersList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column label="编辑"> </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>
<script>
import {users} from '@/api/home.js'
export default {
data(){
  return{
    users:{
      total:0,
      usersList:[]
    },
    usersParams:{
      query:'',
      pagenum:1,
      pagesize:10
    }
  }
},
created(){
  this.getUsers()
},
methods:{
  getUsers(){
    users(this.usersParams).then(res=>{
      console.log(res)
      this.users.usersList = res.data.users
      this.users.total = res.data.total
    })
  }
}


};
</script>
<style lang="less" scoped>
.el-breadcrumb {
  padding: 20px 0;
}
</style>