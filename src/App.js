import React, { Component } from 'react'
import Cart from "./Cart"
import Checkout from "./Checkout"
import Items from "./Items"
import productData from "./data/productData"


export default class App extends Component {
  render() {
    const items = {productData}
    const  items  = this.props
    const addedItems = addedItems


    return (
      <div class="App">
        <div>
          <div className="leftSide" />
          <h1>My Garage Sale</h1>
          <Items Items={items} />
        </div>
        <div className="rightSide">
          <Cart
            addedItems={addedItems}
            subtotal={subtotal}
            tax={tax}
            total={total} />

          <Checkout
            total={total} />


        </div>
      </div>
    )
  }
}


import "./App.css";




