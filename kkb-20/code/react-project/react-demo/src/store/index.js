// import { reducerName } from './reducer'
import { createStore } from 'redux'

// createStore 创建 store, 初始化 store 值
// dispatch 修改值，根据 currentState 和 anction
// subscribe 订阅更新

function reducer (state = 0, action) {
  console.log(state)
  switch (action.type) {
    case 'Add': 
      return state + 1
    case 'Minus':
      return state - 1
    default:
      return 0
  }
}

const store = createStore(reducer)

export default store


// 暗号：毛里塔尼亚

export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChanged = false;
    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    }

    hasChanged =
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}