import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


class Layout extends React.Component {
  constructor () {
    super();
    this.state = {name: "Patryk"};
  }

  render() {
    setTimeout(() => {
      this.setState({name: "Asia"});
    }, 1000 );


     return (
       <div>
         {this.state.name}
         <Header/>
         <Footer/>
       </div>


    );
  }
}

export default Layout