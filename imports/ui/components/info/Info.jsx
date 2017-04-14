import React , { Component } from 'react';

import Hello from '/imports/ui/components/hello/Hello.jsx';
import Info from '/imports/ui/components/info/Info.jsx';

export default class WelcomePage extends Component{
  render(){
    return(
      <div>
          <h2>Learn Meteor!</h2>
          <ul>
              <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>
              <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>
              <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>
              <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>
          </ul>
          <p>Hola</p>
      </div>
    );
  }
}
