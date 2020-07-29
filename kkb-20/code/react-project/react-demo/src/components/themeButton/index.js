import React, { Component } from 'react';
import ThemeContext from './../../js/context'
import Alert from './../Alert'


class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() { 
    return ( 
      <div>
        <Alert theme={this.context} ></Alert>
        <ThemeContext.Consumer>
          { value => (<span>ddd { console.log(value) }</span>)}
        </ThemeContext.Consumer>
      </div>
     );
  }
}

export default ThemeButton