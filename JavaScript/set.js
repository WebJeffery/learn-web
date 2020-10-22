
/**
 * 集合操作
 * 定义交集、并集、补集、差集
 */


 /**
  * 1、两个集合简易版操作
  */
class SimpleSet {

  // 并集
  static union(set1, set2) {
    return new Set([...set1, ...set2])
  }

  // 交集实现方式1
  static intersection(set1, set2) {
    let set = new Set()
    for (const item of set1) {
      if (set2.has(item)) {
        set.add(item)
      }
    }
    return set
  }

  // 交集实现方式2
  static intersection2(set1, set2) {

    return new Set(
      [...set1].filter(item => set2.has(item))
    )
  }

  // 差集，在集合 set1 出现，不住 set2 中出现
  static difference(set1, set2) {

    return new Set(
      [...set1].filter(item => !set2.has(item))
    )
  }

  // 两个集合对称差集
  static difference2(set1, set2) {
    let union = SimpleSet.union(set1, set2)
    let intersection = SimpleSet.intersection2(set1, set2)

    return new Set(
      [...union].filter(item => !intersection.has(item))
    )
  }

}
// let set1 = new Set([1, 23, 34, 2, 3])
// let set2 = new Set([1, 23 ,4 ,2, 22])

// console.log(SimpleSet.difference2(set1, set2))



/**
 * 2、多个集合操作
 */
 class XSet extends Set {

/**
 * 取并集
 * @param  {Array} sets 集合参数
 */
 union(...sets) {
   return XSet.union(this, ...sets)
 }

 /**
  * 取交集
  * @param  {Array} sets 集合参数
  */
 insersection(...sets) {
   return XSet.insersection(this, ...sets)
 }

 // 取差集
 difference(set) { 
  return XSet.difference(this, set); 
}

// 取对称差集
symmetricDifference(set) { 
  return XSet.symmetricDifference(this, set); 
}

// 取笛卡尔集
cartesianProduct(set) { 
  return XSet.cartesianProduct(this, set); 
}

// 取幂集
powerSet() { 
  return XSet.powerSet(this); 
}

 // 返回两个或更多个集合的并集
 static union(a, ...bSets) {
   const unionSet = new XSet(a)

   for (const b of bSets) {
     for (const bValue of b) {
       unionSet.add(bValue)
     }
   }
   return unionSet
 }

 // 返回两个或更多个集合的交集
 static insersection(a, ...bSets) {
  const insersectionSet = new Set(a)

  for (const aValue of insersectionSet) {
    for (const b of bSets) {
      if (!b.has(aValue)) {
        insersectionSet.delete(aValue)
      }
    }
  }
  return insersectionSet
 }

 /**
  * 返回两个集合差集
  * @param {Set} a 
  * @param {Set} b 
  */
 static difference(a, b) {
  const differenceSet = new XSet(a)

  for (const bValue of b) {
    if (a.has(bValue)) {
      differenceSet.delete(bValue)
    }
  }
  return differenceSet
 }

 /**
  * 返回两个集合的对称差集
  * @param {XSet} a 
  * @param {XSet} b 
  */
 static symmetricDifference(a, b) {
   let union = a.union(b)
   let insersection = a.insersection(b)

   return union.difference(insersection)
 }

 /**
  * 返回两个集合（数组对形式）的笛卡儿积；必须返回数组集合，因为笛卡儿积可能包含相同值的对
  * @param {Set} a 
  * @param {Set} b 
  */
 static cartesianProduct(a, b) {
  const cartesianProductSet = new XSet();

  for (const aValue of a) {
    for (const bValue of b) {
      cartesianProductSet.add([aValue, bValue])
    }
  }
  return cartesianProductSet
 }

 /**
  * 返回一个集合的幂集
  * @param {Set} a 
  */
 static powerSet(a) {
   const powerSet = new XSet().add(new XSet())

   for (const aValue of a) {
     for (const set of new XSet(powerSet)) {
      powerSet.add(new XSet(set).add(aValue));
     }
   }
   return powerSet
 }
}

// let set1 = new XSet([1, 23, 34, 2, 3])
// let set2 = new XSet([1, 23 ,4 ,2, 22])
// let set3 = new Set([1, 3, 2])

// const xset = new XSet()

// console.log(set1.powerSet(set2))

