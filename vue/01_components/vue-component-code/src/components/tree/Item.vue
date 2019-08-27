<template>
  <li>
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{showFolder ? '+' : '-'}}]</span>
    </div>
    <ul>
      <tree-item v-for="item in model.children" :model="item" :key="item.title"></tree-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'TreeItem',
    props: {
      model: {
        type: Object
      }
    },
    data() {
      return {
        showFolder: false
      }
    },
    computed: {
      isFolder() {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          this.showFolder = !this.showFolder
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>