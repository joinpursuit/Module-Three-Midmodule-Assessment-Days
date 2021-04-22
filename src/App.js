import React from 'react';
import "./App.css";
import Checkout from './Components/Checkout';
import Products from './Components/Products';
import Cart from './Components/Cart';
import productData from './data/productData'


class App extends React.Component {
  render(){
    return (
      <div>
        <Products products={productData}/>
        <Checkout/>
        <Cart/>
      </div>
    )
  }
};

export default App;
