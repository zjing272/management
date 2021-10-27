<template>
  <div class="login">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form ref="login" :model="param" :rules="rules" class="ms-content" >
        <el-form-item prop="username">
          <el-input placeholder="username" v-model="param.username">
<!--            可通过 slot 来指定在 input 中前置或者后置内容。-->
            <template #prepend><el-button icon="el-icon-user"/></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter="submitForm">
            <template #prepend><el-button icon="el-icon-lock"/></template>
          </el-input>
        </el-form-item>
        <div class="login-btn" @click="submitForm"><el-button type="primary">登录</el-button></div>
        <p class="login-tips">Tips：用户名密码随便填写</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      param: {
        username: undefined,
        password: undefined
      },
      //校验用户名和密码
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      let {username, password} = this.param;
      if(username && password) {
        //全局引入element后，element已经在app.config.globalProperties添加了全局方法$message
        this.$message.success("登录成功");
        // alert('登录成功！');
        localStorage.setItem('ms_username', username);
        this.$router.push("/")
      } else {
        this.$message.error("请输入用户名和密码");
      }
    }
  }
}
</script>

<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../assets/img/log-back.png") no-repeat;
    background-size: 100% 100%;
  }
  .ms-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  .ms-title {
    height: 60px;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
  }
  .ms-content {
    padding: 30px 30px 40px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #fff;
  }
  .login-btn {
    width: 100%;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
  }
  .login-tips {
    margin-top: 20px;
    font-size: 14px;
    color: #fff;
  }
</style>
