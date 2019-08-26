<template>
  <div class="child1-app">
    <h1>Child1</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
