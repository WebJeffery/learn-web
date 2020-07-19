<template>
  <div>
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  // 装饰器工厂函数
  function Component (options: any) {
    return function (target: any) {
      // 返回 Vue 配置对象
      return Vue.extend(options)
    }
  }

  @Component({
    props: {
      msg: {
        type: String,
        default: 'e33333'
      }
    }
  })

  export default class Dector extends Vue {

  }
  

</script>

<style scoped>

</style>