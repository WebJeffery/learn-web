<template>
  <div class="child1-app">
    <h1>Child1</h1>
    <p>{{title}}</p>
    <p><button @click="update">修改爸爸的值 + 1</button></p>
    <p><button @click="qiehuanBroadCast">向子组件广播</button></p>
    <p>dispatchValue {{dispatchValue}}</p>
    <p>eventBus {{eventBus}}</p>
    <div class="child-content">
      <grand-child1 style="width: 50%"></grand-child1>
      <grand-child2 style="width: 50%"></grand-child2>
    </div>
  </div>
</template>

<script>
import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'
import Emitter from './../../mixins/emitter'
export default {
  name: 'Child1',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mixins: [Emitter],
  data() {
    return {
      count: 1,
      dispatchValue: '',
      eventBus: '',
      flag: true
    }
  },
  mounted () {
    this.$on('dispatch', (value) => {
      this.dispatchValue = value
    });
    this.$bus.$on('event-bus', (value) => {
      this.eventBus = value
    });
  },
  components: {
    GrandChild1,
    GrandChild2
  },
  methods: {
    update () { 
      // 和父组件通信，修改父组件的值
      this.$emit('postMessage', ++this.count)
    },
    qiehuanBroadCast () {
      let msg = this.flag ? '我是广播信息' : ''
      this.broadcast('broadcast', msg)
      this.flag = !this.flag
    }
  },
}
</script>

<style scoped>
.child1-app {
  border: 3px solid blue
}
.child-content {
  display: flex;
}
</style>
