<template>
  <div class="login">
    <h1>login</h1>
    <el-card class="box-card">
      <el-form ref="login" :model="user" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      user: {
        username: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    onSubmit() {
      login(this.user).then((res) => {
        console.log(res);
        const {data,meta} = res
        if (meta.status == 200) {
          this.$message({
            message: "登录成功",
            type: "success",
          });
          // 保存token
        window.localStorage.setItem('user',data.token)
          // 跳转首页
        this.$router.push('/')
        } else {
          this.$message({
            message: "账号或密码错误",
            type: "warning",
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box-card {
  width: 500px;
  margin: 50px auto;
  border-radius: 20px;
}
</style>