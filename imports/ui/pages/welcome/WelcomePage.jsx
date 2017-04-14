import React , { Component } from 'react';

import Hello from '/imports/ui/components/hello/Hello.jsx';
import Info from '/imports/ui/components/info/Info.jsx';

export default class WelcomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
    }
  }
  incrementCounter(){
    this.setState({
      counter:this.state.counter+1,
    });
  }
  render(){
    return(
      <div>
        <h1>Welcome to Meteor!</h1>
        <Hello counter={this.state.counter} incrementCounter={this.incrementCounter.bind(this)}/>
        <Info/>
      </div>
    );
  }
}
