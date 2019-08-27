<template>
  <div class="grand-child1-app">
    <h1>GrandChild1</h1>
    <p>provide {{parentApp.title}}</p>
    <p>broadcast {{broadcast}}</p>
    <p>dispatchValue {{dispatchValue}}</p>
    <p>eventBus {{eventBus}}</p>
    <grand-grand-child1></grand-grand-child1>
  </div>
</template>

<script>
import GrandGrandChild1 from './GrandGrandChild1'
export default {
  name: 'GrandChild1',
  inject: ['parentApp'],
  data() {
    return {
      count: 1,
      broadcast: '',
      dispatchValue: '',
      eventBus: ''
    }
  },
  mounted () {
    this.$on('broadcast', (value) => {
      this.broadcast = value
    });
    this.$on('dispatch', (value) => {
      this.dispatchValue = value
    });
    this.$bus.$on('event-bus', (value) => {
      this.eventBus = value
    });
  },
  components: {
    GrandGrandChild1
  },
  methods: {

  }
}
</script>

<style scoped>
.grand-child1-app {
  border: 3px solid darkkhaki;
}
</style>
