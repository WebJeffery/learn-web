<template>
  <div>
    <input :type="type" :value="value" v-bind="$attrs" @input='outInput' autocomplete="off">
  </div>
</template>

<script>
  export default {
    name: 'XInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      outInput(e) {
        // 派发事件
        this.$emit('input', e.target.value)
        // 通知校验
        this.$parent.$emit('validate')
      }
    },
  }
</script>

<style scoped>

</style>