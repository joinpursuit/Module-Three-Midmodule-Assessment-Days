// import React from 'react'
import productData from "./data/productData";
import Products from "./data/Products";
import Checkout from "./data/Checkout";
import Cart from "./data/Cart";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      addCart: [],
    };
    this.data = productData;
  }

  addedCart = (item) => {
    let addCart = this.state.addCart;
    this.setState({ addCart: addCart.concat(item) });
  };

  render() {
    const { addCart } = this.state;
    const subtotal = addCart.reduce((a, b) => a + b.price, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
      <div className="App">
        <div>
          <h1>My Garage Sale</h1>
          <Products data={this.data} addedCart={this.addedCart} />
        </div>
        <div>
          <Cart addCart={addCart} subtotal={subtotal} tax={tax} total={total} />
          <Checkout total={total} />
        </div>
      </div>
    );
  }
}
