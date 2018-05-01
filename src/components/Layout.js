import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


class Layout extends React.Component {
  render() {
    const title ="Welcome Patryk !!!";

     return (
       <div>
         <Header title={title}/>
         <Header title={"Other title"}/>
         <Footer/>
       </div>


    );
  }
}

export default Layout