<template>
  <div class="grand-child1-app">
    <h1>GrandGrandChild1</h1>
    <p><button @click="postDispatch">我要向外派发信息</button></p>
    <p>provide {{parentApp.title}}</p>
    <p>broadcastValue {{broadcastValue}}</p>
    <p>eventBus {{eventBus}}</p>
  </div>
</template>

<script>
import Emitter from './../../mixins/emitter'
export default {
  name: 'GrandGrandChild1',
  props: {

  },
  inject: ['parentApp'],
  mixins: [Emitter],
  data() {
    return {
      count: 1,
      broadcastValue: '',
      eventBus: '',
      flag: true
    }
  },
  mounted () {
    this.$on('broadcast', (value) => {
      this.broadcastValue = value
    });
    this.$bus.$on('event-bus', (value) => {
      this.eventBus = value
    });
  },
  methods: {
    postDispatch () {
      let msg = this.flag ? '我是派发信息' : ''
      this.dispatch('dispatch', msg)
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped>
.grand-child1-app {
  border: 3px solid yellow;
}
</style>
