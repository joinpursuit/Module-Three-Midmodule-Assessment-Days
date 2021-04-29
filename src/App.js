import "./App.css";
import "./components/Products.css"
import productData from "./data/productData"
import React, { Component } from 'react'
import Products from "./components/Products"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      checkoutItem : [],
    }
  }
  addToCart = (product) => {
    const {checkoutItem} =this.state;
    this.setState({checkoutItem: [...checkoutItem, product],
    })
  }

  render() {
    const {checkoutItem} = this.state
    return (
      <>
      <div className="Products">
        <Products product={productData} addToCart={this.addToCart} />
      </div>
      <Cart />
      <Checkout />
      </>
    )
  }
}

