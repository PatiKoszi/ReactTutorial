import React from 'react'
import Title from "./Header/Title";

class Header extends React.Component {
  render() {
    return (
      <div><Title title={this.props.title}/></div>

    );
  }
}

export default Header;