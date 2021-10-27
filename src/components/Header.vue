<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <div v-if="!collapse" class="el-icon-s-unfold"></div>
      <div v-else class="el-icon-s-fold"></div>
    </div>
    <div class="title">后台管理系统</div>
    <div class="header-right">
      <!--  消息提醒    -->
      <div class="message el-icon-bell"></div>
      <!--  用户头像    -->
      <div class="user-img">
        <img src="../assets/img/user.png" alt="">
      </div>
      <!--  用户个人信息下拉框    -->
      <el-dropdown class="user-info" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <a href="https://github.com/zjing272/management" target="_blank"><el-dropdown-item>项目仓库</el-dropdown-item></a>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    collapseChange() {
      // 点击折叠按钮时，修改store中的collapse值
      const { collapse } = this.$store.state;
      this.$store.state.collapse = !collapse;
    },
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if(command === 'loginOut') {
        localStorage.removeItem('ms_username');
        this.$router.push("/login")
      }else if(command === 'user') {
        this.$router.push("/user")
      }
    }
  },
  computed: {
    //计算属性是基于他们的响应式依赖进行缓存的
    // 计算是否折叠
    collapse: function () {
      // 如果此处使用箭头函数，this指向undefined
      return this.$store.state.collapse
    },
  //  获取登录的用户
    username: function () {
      return localStorage.getItem('ms_username');
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #242F42;
}

.collapse-btn {
  float: left;
  padding: 0 20px;
  /*通过修改父盒子字体大小，修改字体图标的大小*/
  font-size: 22px;
  line-height: 70px;
  /*浮动到该位置时设置小手样式*/
  cursor: pointer;
}

.title {
  float: left;
  line-height: 70px;
  font-size: 22px;
}

.header-right {
  display: flex;
  float: right;
  margin-right: 50px;
  height: 70px;
  align-items: center;
  font-size: 22px;
}
.message {
  padding-right: 20px;
}
.user-img img{
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-img {
  margin-right: 15px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-icon-bell,
.el-dropdown-link,
.el-icon-arrow-down {
  font-size: 20px;
}

</style>
