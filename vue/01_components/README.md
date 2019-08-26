## Vue 组件化最佳实践

- Vue 组件通信方式
- Vue slot
- Vue provide & inject
- 最佳实践
  - form 表单
  - 弹窗组件
  - tree 组件

### Vue 组件通信方式
- 父向子通信
- 子向父通信
- 兄弟通信

**父向子通信**

- prop
- $attrs & inheritAttrs
- provide & inject
- $broadcast
- $children
- $ref

**子向父通信**

- $emit
- $dispach
- $parent


**兄弟通信**

- bus总线
- vuex

### 实现一个双向数据绑定

- value 属性 + input 事件
- sync