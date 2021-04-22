import React, { Component } from 'react'
import "./App.css";
import Products from "./Components/Products.js"
import Cart from "./Components/Cart.js"
import Checkout from "./Components/Checkout.js"
import ProductData from "./data/productData"


export class App extends Component {
  constructor(){
    super()

    // this.state = {
    //   products: [],
    //   subTotal: "0.00",
    //   tax: subTotal * 0.05,
    //   total: subTotal + tax,
    // }
  }


  render() {
    return (
       <div className="app">
      <div className="leftSide">
        <Products ProductData={ProductData}/>
      </div>
      <div className="rightSide">
        <Cart />
        <Checkout />
      </div>
    </div>
    )
  }
}

export default App
