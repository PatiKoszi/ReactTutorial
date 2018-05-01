import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getVal() {
    return "Patryk";
  }

  render() {
    return (
      <div>
      <h1>It is {this.getVal()}</h1>
        <h1> I is working!</h1>
      <h1> I is working!</h1>


      </div>

    );
  }
}

export default App;
