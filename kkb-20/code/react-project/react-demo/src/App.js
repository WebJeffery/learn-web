// import React from 'react';
import React, { Component } from 'react';

import HelloWorld from './components/HelloWorld';
import ThemeButton from './components/themeButton'
import store from './store'
import { Provider } from 'react-redux'

// import Alert from './components/Alert';


import './App.css';

import ThemeContext from './js/context'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: true
     }
     this.textInput = React.createRef();
     this.handleDialog = this.handleDialog.bind(this)
  }

  handleDialog () {
    console.log(this.textInput)
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add () {
    store.dispatch({
      type: 'Add'
    })
  }



  render() { 
    console.log(store)
    console.log(store.getState())
    return (
      <div className="App">
        {store.getState()}
        <button onClick={this.add}>累加</button>
        <ThemeContext.Provider value={ {name: 22, value: 23332332}}>
          <Toolbar />
        </ThemeContext.Provider>
        <input ref={this.textInput}  aria-label='dddd'></input>
        <Provider store={store}>
          <HelloWorld></HelloWorld>
        </Provider>
      </div>
    );
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  );
}

 
export default App;
