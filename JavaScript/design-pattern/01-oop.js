
/**
 * 多态：将“做什么”和“谁去做以及怎样去做”分离开来;
 * “不变的事情”与“可能改变的事情”分离开来。把不变的部分隔离出来，把可变的部分封装起来
 * @param {*} animal 
 */

 // 动物都会叫是不变，封装起来
const makeSound = function(animal) {
  animal.sound && animal.sound()
}

const Duck = function(){}

Duck.prototype.sound = function() {
  console.log('嘎嘎嘎')
}

// makeSound(new Duck())

// 地图显示案例

const renderMap = function(map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

const googleMap = {
  show () {
    console.log('开始渲染谷歌地图')
  }
}

const baiduMap = {
  show () {
    console.log('开始渲染百度地图')
  }
}

// console.log(renderMap(googleMap))


// 封装