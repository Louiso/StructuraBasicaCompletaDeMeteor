import React , { Component } from 'react';

import Hello from '/imports/ui/components/hello/Hello.jsx';
import Info from '/imports/ui/components/info/Info.jsx';

export default class WelcomePage extends Component{
  render(){
    return(
      <div className='hello'>
        <button onClick={this.props.incrementCounter}>Click Me!!</button>
        <p>Haz presionado el boton { this.props.counter } veces</p>
      </div>
    );
  }
}
