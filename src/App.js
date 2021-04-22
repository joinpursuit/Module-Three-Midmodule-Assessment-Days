import React, { Component } from 'react'
import productData from "./data/productData"
import ProductsList from "./Components/ProductsList"
import Checkout from './Components/Checkout'
import Cart from "./Components/Cart"

export class App extends Component {
  constructor(){
    super()
    
    this.state = {
      cartItems: productData
    }
  }

  handleClick = () => {
    
  }




  render() {
    return (
      <div>
        <ProductsList productData={productData} handleClick={this.handleClick}/>
        <Checkout />
        <Cart displayCart={this.state.cartItems} />
      </div>
    )
  }
}

export default App
