import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout";
import Title from "./components/Header/Title";
import Egg from "./egghead/egg";
import Child from "./egghead/propschildren";

class App extends Component {
  render() {
    return (
      <div>
        <Egg cat ={5} text="This is text from props"/>
        <Child/>
      </div>

    )
  }
}

export default App;
