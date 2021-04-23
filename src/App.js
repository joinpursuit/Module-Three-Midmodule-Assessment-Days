import React, { Component } from 'react'
import Cart from "./Cart"
import Checkout from "./Checkout"
import Items from "./Items"
import productData from "./data/productData"

import "./App.css";
export default class App extends Component {
  render() {



    return (
      <div className="App">
        <div>

          <div className="leftSide" />
          <h1>My Garage Sale</h1>
          <Items items={productData} />
        </div>
        <div className="rightSide">
          <Cart/>
          <h1>Cart</h1>

          <Checkout/>
          <h1>Checkout</h1>

        </div>
      </div>
    )
  }
}



// addedItems={addedItems}
//             subtotal={subtotal}
//             tax={tax}
//             total={total} 



//             total={total} 