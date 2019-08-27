<template>
  <div>
    <h3>表单</h3>
    <hr />
    <XForm :model="model" :rules="rules" ref="loginForm">
      <XFormItem label="用户名" prop="username">
        <XInput v-model="model.username" placeholder="请输入用户名"></XInput>
      </XFormItem>
      <XFormItem label="密码" prop="password">
        <XInput type="password" v-model="model.password" placeholder="请输入密码"></XInput>
      </XFormItem>
      <XFormItem>
        <button @click="onLogin">登录</button>
      </XFormItem>
    </XForm>
  </div>
</template>

<script>
  import XInput from './XInput'
  import XForm from './XForm'
  import XFormItem from './XFormItem'
  import { create } from './../../utils/create'
  import Alert from './../alert/index'
  export default {
    name: 'Form',
    components: {
      XInput,
      XForm,
      XFormItem
    },
    data() {
      return {
        model: { username: "tom", password: "" },
        rules: {
          username: [{ required: true, message: "请输入用户名" }],
          password: [{ required: true, message: "请输入密码" }]
        }
      }
    },
    methods: {
      onLogin () {
        this.$refs['loginForm'].validate(isValidate => {
          const alertValue = create(Alert, {
            title: '提示',
            message: isValidate ? '登陆成功' : '登陆失败'
          })
          alertValue.show()
          setTimeout(() => {
            alertValue.remove()
          }, 2000)
          if (isValidate) {
            console.log('校验通过')
          } else {
            console.log('校验不通过')
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>