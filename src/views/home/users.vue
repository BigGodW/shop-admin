<template>
  <div>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="searchbox">
      <el-input v-model="searchId" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="onsearchUser()"
        >搜索</el-button
      >
      <!-- 添加用户 -->
      <el-button @click="dialogFormVisible = true">添加用户</el-button>
      <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="newUser" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="newUser.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="newUser.password"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="newUser.email"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="newUser.mobile"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onaddUser">确 定</el-button>
          <el-button type="primary" @click="oneditUser">修 改</el-button>
        </div>
      </el-dialog>
      <!-- 修改用户 -->
      <el-button @click="dialogFormVisible1 = true">编辑用户</el-button>
      <el-dialog title="添加用户" :visible.sync="dialogFormVisible1">
        <el-form ref="form" :model="editUser" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="editUser.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="editUser.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="editUser.mobile"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="oneditUser">修 改</el-button>
        </div>
      </el-dialog>
    </div>

    <el-card>
      <el-table :data="users.usersList" style="width: 100%" stripe>
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="create_time" label="创建时间"> </el-table-column>
        <el-table-column label="编辑" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="showedit(scope.row.id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="ondeleteUser(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import {
  users,
  searchUser,
  addUser,
  deleteUser,
  editUser,
} from "@/api/home.js";
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1:false,
      searchId: "",
      users: {
        total: 0,
        usersList: [],
      },
      newUser: {
        username: "12333",
        password: "123456",
        email: "",
        mobile: "",
      },
       editUser: {
        email: "",
        mobile: "",
      },
      usersParams: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      users(this.usersParams).then((res) => {
        console.log(res);
        this.users.usersList = res.data.users;
        this.users.total = res.data.total;
      });
    },
    onsearchUser(id) {
    return  searchUser(id).then((res) => {
        return res.data
      });
    },
    onaddUser() {
      this.dialogFormVisible = false;
      addUser(this.newUser).then((res) => {
        if (res.meta.status == 201) {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
          this.getUsers();
        }
      });
    },
    ondeleteUser(id) {
      this.$confirm("此操作将永久删除该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteUser(id).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getUsers();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
   async showedit(id){
      const data = await this.onsearchUser(id)
      console.log(data)
      this.editUser.mobile = data.mobile
      this.editUser.email = data.email
      this.dialogFormVisible1 = true;
    },
    async oneditUser() {
     editUser(this.searchId,this.editUser).then(res=>{
       console.log(res)
        this.dialogFormVisible1 = false
        // this.getUsers()
     })
    },
  },
};
</script>
<style lang="less" scoped>
.el-breadcrumb {
  padding: 20px 0;
}
.searchbox {
  .el-input {
    width: 300px;
  }
}
</style>