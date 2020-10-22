
/**
 * 实现继承：接口继承和实现继承
 *
 */


/**
 * 1、原型继承
 * 问题：
 * 1、属性如果是引用类型，会出现数据污染
 * 2、子类型的实例化不能给父类型的构造函数传参
 */
function Parent () {
  this.name = 'parent'
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child () {
  this.name = 'child'
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let child = new Child()
console.dir(Child.prototype.constructor)


/**
 * 2、盗用构造函数: 借助 call、apply ，在子类构造函数中调用父类构造函数
 *  问题
 *  1、必须在构造函数中定义方法，函数不能重用
 *  2、子类不能访问父类原型上的方法
 */
function Parent1() {
  this.name = 'parent'
}

function Child1 (name) {
  Parent1.call(this, name)
}


/**
 * 3、组合继承
 *
 */

function Parent2(name) {
  this.name = name
  this.colors = ['red', 'green']
}

Parent2.prototype.sayName = function() {
  console.log(this.name)
}

function Child2 (name, age) {
  // 继承属性
  Parent2.call(this, name)
  this.age = age
}

// 继承方法
Child2.prototype = new Parent2()
Child2.prototype.constructor = Child2
Child2.prototype.sayAge = function() {
  console.log(this.age)
}

/**
 * 4、原型式继承 Object.create()
 *
 * @param {*} name
 */
function Parent3 (name) {
  this.name = name
}

const Child3 = Object.create(Parent3)

// 实现方式2
function object(o) {
  let Fn = function() {}
  Fn.prototype = o
  return new Fn()
}


/**
 * 5、寄生组合继承
 * call 继承属性，Object.create() 继承方法
 */


function Parent4 (name) {
  this.name = name
  this.colors = ['red', 'green']
}

Parent4.prototype.sayName = function() {
  console.log(this.name)
}

function Child4 (name, age) {
  // 继承属性
  Parent4.call(this, name)
  this.age = age
}

inheritPrototype(Child4, Parent4)

function inheritPrototype(child, parent) {
  let prototype = Object.create(parent)
  prototype.console = child
  child.prototype = prototype
}