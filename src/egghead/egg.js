import React from 'react';

class Egg extends React.Component {
  state = {
      txt: 'This is text from state',
      cat: 2,
    }


  update = (event) => {
    this.setState({txt: event.target.value})
  }

  render() {
    let txt = this.props.text;
    return (
      <div>
        <h1> Input</h1>
        <Foo update={this.update}/>

        <h1>{txt}</h1>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

const Foo = (props) =>
  <input onChange={props.update} />

export default Egg;