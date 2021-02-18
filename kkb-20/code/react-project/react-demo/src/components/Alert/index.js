import React, { Component } from 'react';

class Alert extends Component {
  constructor (props, params) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0
    }
  }



  componentDidMount() {
    console.log('dimmount')
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerID);
  }

  handler () {
    this.change(1)
    this.change(2)
    this.change(3)
    console.log(this.state.count)
  }

  change (num) {
    this.setState((state) => {
      return {
        count: state.count + num
      }
    })
  }

  render() {
    let { count } = this.state
    return (
      <div>
        早上
        {count}
        <button onClick={() => {this.handler()}}>add</button>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Alert;
