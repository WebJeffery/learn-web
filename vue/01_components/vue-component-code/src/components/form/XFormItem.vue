<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMsg">{{errorMsg}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    name: 'XFormItem',
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        errorMsg: ''
      }
    },
    mounted () {
      this.$on('validate', () => {
        this.validate()
      });
    },
    methods: {
      validate () {
        // 1、获取值和校验规则
        // 2、创建 Schema 实例 {username: rules}
        // 3、执行校验，校验对象，回调函数
        // validate 返回校验结果为 Promise
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]
        const schema = new Schema({[this.prop]: rules})
        return schema.validate({[this.prop]: value}, (errors) => {
          if (errors) {
            this.errorMsg = errors[0].message
          } else {
            this.errorMsg = ''
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>