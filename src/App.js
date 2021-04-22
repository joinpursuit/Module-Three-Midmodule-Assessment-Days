import React, { Component } from 'react'
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import productData from "./data/productData"
import "./App.css";

export class App extends Component {
  constructor(){
    super()
    this.state = {
      purchase: [] ,
    }
   this.data = productData
  }

  addToCart = (product) => {
    let purchase = this.state.purchase
    this.setState({purchase: purchase.concat(product)})
  }

  
  render() {
    const {purchase} = this.state
    const subtotal = purchase.reduce((a,b) => a + b.price, 0)
    const tax = subtotal * 0.05
    const total = subtotal + tax

    return (
      <div className = "App">
        <div className = "left_column">
        <h1>My Garage Sale</h1>
          <Products 
          data = {this.data}
          addToCart = {this.addToCart}
          />
        </div>
        <div className ="right_column">
          <Cart 
          purchase = {purchase}
          subtotal = {subtotal}
          tax = {tax}
          total = {total}
          />
          <Checkout 
          total = {total}
          />
        </div>
      </div>
    )
  }
}

export default App;

