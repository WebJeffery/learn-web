<template>
  <div id="app">
    <h1>1、组件间通信</h1>
    <component-communicate></component-communicate>
    <br />
    <hr />
    <h1>2、封装form组件最佳实践</h1>
    <x-form></x-form>
    <br />
    <hr />
    <h1>3、封装 Tree 组件最佳实践</h1>
    <x-tree></x-tree>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentCommunicate from './components/communicate/index'
import XForm from './components/form/index'
import XTree from './components/tree/index'

export default {
  name: 'app',
  components: {
    ComponentCommunicate,
    XForm,
    XTree
  },
  provide () {
    return {
      app: this
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
