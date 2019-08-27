<template>
  <div v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-message">{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show () {
        this.isShow = true
      },
      hide () {
        this.isShow = false
        this.remove()
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>