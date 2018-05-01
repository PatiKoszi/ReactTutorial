import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


class Layout extends React.Component {
  state = {title: "Welcome",};

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
       <div>
         <Header changeTitle={this.changeTitle.bind(this)}
                 title={this.state.title}/>
         <Footer/>
       </div>


    );
  }
}

export default Layout