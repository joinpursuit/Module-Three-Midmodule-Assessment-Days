import React, { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      iwannabuy: [],
    };
    this.productData = productData;
  }

  addToCart = (product) => {
    console.log("add to cart");
    this.setState({iwannabuy: [...this.state.iwannabuy, product]})
    console.log(this.state.iwannabuy)
    console.log(product)
  };

  calculatePrice = (product) => {
    console.log("calculate price");
  };

  render() {
      let subtotalPrice = this.state.iwannabuy.reduce((a,b) => a+b.price, 0)
      let tax = (subtotalPrice/100)*5
      let totalPrice = subtotalPrice + tax
    return (
      <div>
       {this.state.iwannabuy.price}
        <ProductList
          productData={this.productData}
          addToCart={this.addToCart}
        />

        <Cart iwannabuy={this.state.iwannabuy} subtotalPrice={0 || subtotalPrice} tax={0 || tax} totalPrice={totalPrice} />
        <Checkout totalPrice={0.00 || totalPrice}/>
      </div>
    );
  }
}
