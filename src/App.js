import React, { Component } from 'react'
import productData from "./data/productData"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import "./App.css"

export default class App extends Component {
  constructor(){
    super()
    this.state = { cartItems: [] }
  }
  addToCart = (item) => {
    this.setState({ cartItems: [...this.state.cartItems, item] })
  }
  render() {
    const { cartItems } = this.state
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    const tax = subtotal * 0.05
    const total = subtotal + tax
    return (
      <div className="App">
        <div className="left">
          <h1>My Garage Sale</h1>
          <Products
            productsList={productData}
            addToCart={this.addToCart}
          />
        </div>
        <div className="right">
          <Cart
            cartItemsList={cartItems}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
          <Checkout
            total={total}
          />
        </div>
      </div>
    )
  }
}
