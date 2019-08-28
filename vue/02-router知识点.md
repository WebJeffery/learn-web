### 路由

#### 路由挂载过程
1、定义模板，渲染的组件文件
2、定义路由 routes
3、实例化 vue-router
4、挂载在 Vue 实例上

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) // 按照路由

const routes = [
  {
    path: '', // 路径
    name: '', // 命名路由
    redirect: '', // 重定向
    alias: '', // 别名
    component: '', // 组件渲染 (可以进行异步加载)
    components: {
      default: componentA,
      a: componentB,
      b: componentC
    }, // 多视图 
    children: [], // 嵌套路由
    props: true, // 可以在组件内部通过 props 拿到动态路由的参数指
    meta: {}, // 元数据
    beforeEnter: () =>{}, // 路由守卫
    scrollView: () => {} // 滚动
  }
]

export default new Router({
  mode: 'hash', // 模式 hash | history
  routes
})
```

#### 路由内置组件

- router-view 占位符，渲染视图，通过 name 可以定义多视图
- router-link 标签，可以通过 tag 定义标签，router-link-active 是激活的 class 样式
```html
<router-view name="a"></router-view> // 渲染视图
<router-view name="b"></router-view> // 多视图
<router-link :to="{name: '', path: '', query: {}, params: {}}" tag='tagName'></router-link> // 链接

```

#### 路由实例

**routes：** 当前的路由
使用场景：可以监听当前路由的变化做数据处理和渲染
```js
动态路由参数：this.$routes.params
路径参数：this.$routes.query
```

**router：** 路由的实例

```js
this.$router.push({name: '', params: {}, query: {}, meta: {}, path: ''})
this.$router.go/forward/back/replace

```


#### 路由守卫
执行顺序
beforeEach -> beforeEnter -> beforeResolve -> afterEach

**全局守卫**
访问页面时，全局守卫都会触发，一般使用 beforeEach 做权限页面跳转，beforeResolve 和 beforeAfter 不常用，只是执行时间不一样
```js
/**
 * 前置钩子，在路由进来之前做判断
 * 使用场景，页面登陆注册
*/
router.beforeEach(to, from, next) {

}
// 作用和 beforeEach 一样,区别是触发的时间不一样
router.beforeResolve(to, from, next) {

}

router.afterEach(to, from, next) {

}
```

**路由独享的守卫**
位置写在路由配置里
```js
const routes = [
  {
    path: '',
    name: '',
    component: '',
    beforeEnter (to, from, next) {

    }
  }
]
```

**组件内的守卫**

```js
/**
 * 不能调用 this 的 Vue 实例
 * next 可以在回调中拿到 vm 实例
 * /
beforeEnter (to, from, next) {
  next(vm => {
    console.log(vm)
  })
}
/**
 * 路由跳转时调用
 * /
beforeUpdate (to, from, next) {
  
}
/**
 * 页面离开前做判断
 * 使用场景：比如是填写表单或密码时，防止误操作跳转到其他页面，所以在离开页面时作判断
 * /
beforeLeave (to, from, next) {
  
}
```