<template>
  <div class="grand-child2-app">
    <h1>GrandChild2</h1>
    <grand-grand-child1></grand-grand-child1>
    <p>dispatchValue {{dispatchValue}}</p>
  </div>
</template>

<script>
import GrandGrandChild1 from './GrandGrandChild1'
export default {
  name: 'GrandChild2',
  props: {

  },
  data() {
    return {
      count: 1,
      dispatchValue: ''
    }
  },
  mounted () {
    this.$on('dispatch', (value) => {
      this.dispatchValue = value
    })
  },
  components: {
    GrandGrandChild1
  },
  methods: {

  }
}
</script>

<style scoped>
.grand-child2-app {
  border: 3px solid seagreen;
}
</style>
