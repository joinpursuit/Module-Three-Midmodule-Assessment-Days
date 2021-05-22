import React, { Component } from 'react'
import productData from "./data/productData"
import ProductsList from "./Components/ProductsList"
import Checkout from './Components/Checkout'
import Cart from "./Components/Cart"

export class App extends Component {
  constructor(){
    super()
    
    this.state = {
      cartItems: []
    }
    this.data = productData
  }


  addToCart = (item) => {
    this.setState((prevState) => {
      return {cartItems: [item, ...prevState.cartItems]}
    })
  }

  render() {
    
    const {cartItems} = this.state
    let subtotal = cartItems.reduce((a, b) => a + b.price, 0)
    let tax = cartItems.reduce((a, b) => a + b.price, 0) * 0.05
    let total = subtotal + tax
  

    return (
      <div>
        <ProductsList addToCart={this.addToCart}/>
        <Checkout total={total} />
        <Cart cartItems={this.state.cartItems} subtotal={subtotal || 0} tax={tax || 0} total={total || 0} />
      </div>
    )
  }
}

export default App
