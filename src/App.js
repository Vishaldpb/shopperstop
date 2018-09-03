import React, { Component } from 'react';
import Grocery from './components/Grocery'
import ShoppingBag from './components/ShoppingBag'
import Stats from './components/Stats'
import Pocket from './components/pocket'

class App extends Component {
  render() {
    return (
      <div >

      <div className="container">
      <div className="row jumbotron">
          <h1 className="text-center">Shoppers Stop!</h1>
          <p className="text-center">A place where you can add daily products ...</p>
        </div>


      <div className="row">
      <Pocket/>
      <br/>

      <Grocery/>
       <ShoppingBag/>
       <Stats/>
       </div>

      </div>


      
      </div>
    );
  }
}

export default App;
