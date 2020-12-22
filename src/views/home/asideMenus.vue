<template>
  <el-menu
    router
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu :index="menus.path" v-for="(menus,i) in menusList" :key="menus.id">
      <template slot="title">
        <i :class="iconList[i]"></i>
        {{ menus.authName }}</template>
      <el-menu-item
        :index="menu.path"
        v-for="menu in menus.children"
        :key="menu.id"
        >
        <i class="el-icon-right"></i>
        {{ menu.authName }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>
<script>
import { menus } from "@/api/home";
export default {
  data() {
    return {
      menusList: [],
      iconList:['el-icon-user-solid','el-icon-unlock','el-icon-sell','el-icon-notebook-1','el-icon-data-line']
    };
  },
  created() {
    this.getMenus();
  },
  methods: {
    getMenus() {
      menus().then((res) => {
        this.menusList = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
}
</style>