<template>
  <div class="parent-app">
    <h1>{{ title }}</h1>
    <child1></child1>
    <child2></child2>
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
  data () {
    return {
      title: 'Parent'
    }
  }
}
</script>

<style>

</style>
