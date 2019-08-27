<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'XForm',
    provide () {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        require: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate (cb) {
        const validateResult = this.$children.filter(item => item.prop)
        .map(item => item.validate())
        // 全局校验
        Promise.all(validateResult)
        .then(() => cb(true))
        .catch(() => cb(false))
      }
    },
  }
</script>

<style scoped>

</style>