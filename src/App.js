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
      cart: []
    }
  }

  addItems = (item)=>{
    let cart = this.state.cart
    this.setState({cart: cart.concat(item)})
  }
  render(){
    let {cart} = this.state
    return (
      <div>
        <Products products={productData}/>
        <Cart cart={cart}/>
        <Checkout/>
      </div>
    )
  }
};

export default App;
