import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout";
import Title from "./components/Header/Title";
import Egg from "./egghead/egg";

class App extends Component {
  render() {
    return (
      <div>
        <Egg cat ={5} text="This is text from props"/>
      </div>

    )
  }
}

export default App;
