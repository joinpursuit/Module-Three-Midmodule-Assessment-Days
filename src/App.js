// import React, { Component } from 'react'
import { useState } from "react"
import productData from "./data/productData"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import "./App.css"

export default function App() {
  const [ cartItems, setCartItems ] = useState([]);
  const [ purchase, setPurchase ] = useState({ subtotal: 0, tax: 0, total: 0 });

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    const subtotal = newCartItems.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    setCartItems(newCartItems);
    setPurchase({ subtotal, tax, total });
  }

  return (
    <div className="App">
      <div className="left">
        <h1>My Garage Sale</h1>
        <Products
          productsList={productData}
          addToCart={addToCart}
        />
      </div>
      <div className="right">
        <Cart
          cartItemsList={cartItems}
          subtotal={purchase.subtotal}
          tax={purchase.tax}
          total={purchase.total}
        />
        <Checkout
          total={purchase.total}
        />
      </div>
    </div>
  )
}
/*
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
*/