<template>
  <div class="hello">
    <h1>{{ msg }}dddsssss</h1>
    <input type="text" v-model.number="number1">
    +
    <input type="text" v-model.number="number2">
    <button @click="add">=</button>
    {{number3}}
   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// 暗号：you can, you up

// 日志装饰器
function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private number1: number = 0
  private number2: number = 0
  private number3: number = 0


  @log
  add() {
     this.number3 = this.number1 + this.number2 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
