import React, { Component } from 'react';
import Burger from './Burger'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
         <Burger/>
      </div>
    );
  }
}
export default App


