import React, { Component } from "react";
import "./App.css";
import Checkout from './Components/CheckOut'
import Cart from './Components/Cart'
import ItemList from "./Components/ItemList";
import productData from './data/productData'

 class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       shoppingCart: [ ]
     }
     this.data = productData
   }

   addToCart = (item) => {
     this.setState({ shoppingCart: [...this.state.shoppingCart, item]})
   }
 

  render () { 
  const {shoppingCart} = this.state
  const subTotal = shoppingCart.reduce((a, b ) => a + b.price, 0);
  const tax = shoppingCart.reduce((a, b ) => a + b.price * 0.05)
  const total = subTotal + tax
    return (
<div className='App'>
  <div className='leftside'>
    <ItemList
    data={this.data}
    addToCart={this.addToCart} />
  </div>
  <div className='rightside'>
    <Cart shoppingCart={this.state.shoppingCart} subTotal={0 || subTotal} tax={0 || tax} total={0 || total}/>
    <Checkout total={0.00 || total}/>
  </div>

</div>
  );
}
};

export default App;
