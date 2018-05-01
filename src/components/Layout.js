import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


class Layout extends React.Component {
  state = {title: "Welcome",};

  render() {

    setTimeout(() => {
      this.setState({title: "Welcome Asia :)"})
    },2000);

     return (
       <div>
         <Header title={this.state.title}/>
         <Header title={"Other title"}/>
         <Footer/>
       </div>


    );
  }
}

export default Layout