import React from 'react';
import Header from "./Header";


class Layout extends React.Component {
  render() {
    var list = [
      <li/>,
      <li/>,
      <li/>,
    ];

    return (
      <ol>
        {list}
      </ol>

    );
  }
}

export default Layout