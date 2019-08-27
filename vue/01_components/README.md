## Vue 组件化最佳实践

- Vue 组件通信方式
- Vue slot 扩展插槽
- 最佳实践
  - form 表单
  - 弹窗组件
  - tree 组件

### Vue 组件间通信分类
- 父组件向子组件通信
- 子组件向父组件通信
- 兄弟组件通信

**父向子通信（可以拿到父组件的信息）**

- prop
- $attrs & inheritAttrs
- $broadcast($children)
- provide & inject
- vue bus

**子向父通信（可以拿到子组件的信息）**

- $emit
- $dispatch($parent)
- $ref
- vue bus


**兄弟通信**

- bus总线
- vuex

### 最佳实践
#### 组件间的通信
- prop & $emit
- provide & inject
- $attrs & inheritAttrs
- dispatch & broadcast ($parent & $children)
- vue bus 总线

##### prop & $emit
**prop**
- 使用场景：父组件向子组件通信
- 配置组件，如果需要更改组件的样式或者动态渲染组件数据，可以定义在 prop 中
- 支持字符串数组和对象的写法，开发中建议使用对象的写法，可以通过 type、default、require、validator 进行配置

**emit**
- 使用场景：子组件向父组件通信，父组件通过 vm.$on 进行回调函数监听

**优点 & 缺点**

- 优点是写法很简便，维护和扩展起来很容易，易读易理解
- 缺点是很难实现多层级和兄弟组件通信，即使能实现可读性和维护性都不好

##### provide & inject
- 使用场景，从外往内层级组件通信，可以进行跨多层级组件通信
- provide 可以是对象，也可以是返回一个对象的函数
- inject 可以是字符串数组，也可以是对象的写法，对象属性有 from、default

**优点 & 缺点**
- 优点是可以进行跨层级组件通信
- 缺点是组件只能从外往内层组件通信，不能从内往外通信，不支持兄弟组件通信

##### $attrs & inheritAttrs
- 使用场景，在封装基础组件的时候很有用，v-bind="$attrs" 和 inheritAttrs: false 配合使用
- $attrs 继承非 prop 属性（除了特殊属性 class, style）

**优点 & 缺点**

- 优点是写法很简便，扩展性强
- 缺点是不支持多层级和兄弟组件通信

##### dispatch & broadcast
- dispatch 使用 $parent 深层查询，在父组件调用 $emit 方法，从内往外派发通信，父组件挂载时通过 $on 事件回调监听
- broadcast 使用 $children 递归遍历，子组件调用 $emit 方法 从外往内广播通信，子组件通过 $on 事件回调监听
- 本质上使用的是 Vue 实例的 $emit 和 $on 注册事件和监听事件实现通信

**优点 & 缺点**

- 优点是可以实现多层级组件双向通信
- 缺点是可维护性和可读性不高

##### bus 总线
- 通过 new Vue 实例，使用 $emit 和 $on 进行双向通信

**优点 & 缺点**

- 优点是可以实现多层级组件双向通信，也可以支持非层级组件通信，实现兄弟组件通信
- 缺点是可读性不好，维护起来不方便


#### slot 扩展插槽
- v-slot vue 2.6.x 新语法，v-slot:content="slotProp" 定义了具名插槽和作用域插槽，写法更简便
- <slot name="" title="标题"></slot> slot 是内置组件，用来扩展组件

#### 实现一个双向数据绑定
- 使用 model 的 prop 属性和 event 事件
- input 输入框的 value 属性 + input 事件
- 单选、复选的 checked 属性 + change 事件
- 下拉选项的 selected 属性 + change 事件

#### 实现一个form表单校验组件

- form 组件定义 model 和 校验规则
- form-item 组件定义 label 和 prop

#### 实现一个弹窗组件


#### 实现一个tree组件