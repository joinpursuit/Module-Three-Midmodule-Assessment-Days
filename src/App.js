import React, { Component } from "react";
import ProductDisplay from "./components/ProductDisplay";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import formatPrice from "./helpers/formatPrice"
import "./App.css";

export default class App extends Component {
  state = { cart: []}

  addToCart = (product) => {
    this.setState((prevState)=>({
      cart: [...prevState.cart, product]
    }))
  }
  render() {
    const {cart} = this.state
    const { products } = this.props;
    return (
      <div class="App">
        <div className="leftSide">
          <h1>My Garage Sale</h1>
          <ProductDisplay products={products} addToCart={this.addToCart} formatPrice = {formatPrice}/>
        </div>

        <div className="rightSide">
          <Cart cart = {cart} formatPrice = {formatPrice}/>
          <Checkout cart = {cart} formatPrice = {formatPrice}/>
        </div>
      </div>
    );
  }
}
