import React from 'react';

class Egg extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: ' this is the state'
    }
  }

  update(event){
    this.setState({txt: event.target.value})
  }

  render() {
    let txt = this.props.text;
    return (
      <div>
        <h1> Input</h1>
        <input type="text"
               onChange={this.update.bind(this)}/>

        <h1>{txt}</h1>
        <h1>{this.state.txt} </h1>
      </div>
    )
  }
}

export default Egg;