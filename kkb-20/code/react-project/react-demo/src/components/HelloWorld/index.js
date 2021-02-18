import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.css'

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'dddd'
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className={styles.hello}>
        Hello world
        {this.msg}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state,
  };
};
const mapDispatchToProps = {
  add: () => {
    return { type: "add" };
  },
  minus: () => {
    return { type: "minus" };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);