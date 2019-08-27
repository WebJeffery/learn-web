<template>
  <div class="child2-app">
    <h1>Child2</h1>
    <p><button @click="bus">bus 总线</button></p>
    <p>dispatchValue {{dispatchValue}}</p>
    <div class="child-content">
      <grand-child1 style="width: 50%"></grand-child1>
      <grand-child2 style="width: 50%"></grand-child2>
    </div>
  </div>
</template>

<script>
import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'
export default {
  name: 'Child2',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dispatchValue: '',
      flag: true
    }
  },
  mounted () {
    this.$on('dispatch', (value) => {
      this.dispatchValue = value
    });
  },
  components: {
    GrandChild1,
    GrandChild2
  },
  methods: {
    bus() {
      let msg = this.flag ? '我是 Child2 的总线' : ''
      this.$bus.$emit('event-bus', msg)
      this.flag = !this.flag
    }
  },
}
</script>

<style scoped>
.child2-app {
  border: 3px solid darkorange
}
.child-content {
  display: flex;
}
</style>
