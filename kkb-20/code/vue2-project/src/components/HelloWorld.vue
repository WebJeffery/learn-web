<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essentialssss Links</h2>
    <button @click="show">提示</button>
  </div>
</template>

<script>
import Notice from "./alter/notice";
import $create from "./../utils/create";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // ss: this.$store.state.counter
    };
  },
  methods: {
    show() {
      $create(Notice, {
        title: "社会你杨哥喊你来搬砖",
        message: "提示信息",
        duration: 3000
      }).show();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
