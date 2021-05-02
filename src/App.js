import React from 'react';
import "./App.css";
import Checkout from './Components/Checkout';
import Products from './Components/Products';
import Cart from './Components/Cart';
import productData from './data/productData'


class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  
  render(){
  
    return (
      <div>
        <Products products={productData}/>
        <Cart/> 
        <Checkout/> 
      </div>
    )
  }
};

export default App;
