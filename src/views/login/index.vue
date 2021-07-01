<template>
  <div class="login">
    <div class="content">
      <img class="login-image" src="@/assets/images/login/form_logo.jpg" alt="" />
      <el-form
        :model="loginForm"
        :rules="rules"
        label-width="90px"
        class="demo-ruleForm"
        ref="loginFormRef"
      >
        <el-form-item label="Username" prop="username">
          <el-input class="input" v-model="loginForm.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="Password"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-button" type="primary" @click="loginSubmit()">Sign In</el-button>
        </el-form-item>
      </el-form>
      <div class="note">Note: 可直接点击登录</div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const loginForm = reactive({
      username: 'admin',
      password: '66666'
    })
    const rules = ref({
      username: [{ required: true, message: 'amdin', trigger: 'blur' }],
      password: [{ required: true, message: '666666', trigger: 'blur' }]
    })

    const loginFormRef = ref()
    const loginSubmit = () => {
      loginFormRef.value.validate((valid) => {
        if (valid) {
          router.push('/home')
        } else {
          router.push('/home')
        }
      })
    }
    return { loginForm, loginFormRef, rules, loginSubmit }
  }
})
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('@/assets/images/login/login_bg.jpg');
  background-size: 100% 100%;
}
.content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: $basePadding;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px 2px $divider;
  display: flex;
  flex-direction: column;
}
.input {
  width: 360px;
}
.login-image {
  width: 200px;
  height: 100px;
  margin: 24px auto;
}
.submit-button {
  width: 80%;
}
.tabs {
  display: flex;
  flex-direction: row;
}
.tab-item {
  background-color: rgba(18, 145, 248, 0.651);
  height: 32px;
  line-height: 32px;
  color: white;
  padding: 0px $basePadding;
  margin-right: $baseMargin;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
}
.tab-item-active {
  box-shadow: inset 0px 0px 5px 2px $divider;
}
.note {
  font-size: $baseFontSize;
}
</style>
