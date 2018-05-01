import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.name = "Patryk";
  }


  zupa(val) {
    return "Asia " + val;
  }

  render() {
    return (
      <div>
      <h1>It is {this.zupa(13)}</h1>
        <h1> I is working! {this.name}</h1>
      <h1> I is working!</h1>


      </div>

    );
  }
}

export default App;
