
/**
 * 工厂模式
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function factory(name, age, job) {
  let obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function() {
    console.log(this.name)
  }
  return obj
}

/**
 * 构造函数模式
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function Factory(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    console.log(this.name)
  }
}