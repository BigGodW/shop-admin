<template>
  <el-container class="home">
    <el-header
      >Header
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <AsideMenus />
      </el-aside>
      <el-main>
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb> -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenus from '@/views/home/asideMenus'


export default {
  name: "Home",
  components: {
    AsideMenus
  },
  data(){
    return{
      breads:{
        users:'用户管理',

      }
    }
  },
  created(){
    
  },
  methods: {
    logout() {
      window.localStorage.clear("user");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
