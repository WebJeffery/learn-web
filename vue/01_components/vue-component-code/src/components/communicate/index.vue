<template>
  <div class="parent-app">
    <h1>{{ title }}</h1>
    <p>修改父亲的值：{{msg}}</p>
    <p>dispatchValue {{dispatchValue}}</p>
    <div class="parent-content">
      <child1 style="width: 50%" :title="title1" @postMessage="postMessage"></child1>
      <child2 style="width: 50%"></child2>
    </div>
    <p>eventBus {{eventBus}}</p>
  </div>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'
export default {
  name: 'ParentComponent',
  components: {
    Child1,
    Child2
  },
  provide () {
    return {
      parentApp: this
    }
  },
  data () {
    return {
      title: 'Parent',
      title1: '我是你爸爸',
      msg: 1,
      eventBus: '',
      dispatchValue: ''
    }
  },
  mounted () {
    this.$bus.$on('event-bus', (value) => {
      this.eventBus = value
    });
    this.$on('dispatch', (value) => {
      this.dispatchValue = value
    });
  },
  methods: {
    postMessage (value) {
      this.msg = value
    }
  },
}
</script>

<style scoped>
.parent-app {
  border: 3px solid red;
}
.parent-content {
  display: flex;
}
</style>
