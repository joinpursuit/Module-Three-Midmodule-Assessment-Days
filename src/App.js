import React, { Component } from "react";
import ProductDisplay from "./components/ProductDisplay";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import formatPrice from "./helpers/formatPrice"
// import products from "./data/pro"
import "./App.css";

export default class App extends Component {
  state = { cart: []}

  addToCart = (product) => {
    const {cart} = this.state
    this.setState({
      cart: [...cart, product]
    })
  }
  render() {
    const {cart} = this.state
    const {products} = this.props
    const subtotal = cart.reduce((sum, product)=> sum + product.price, 0)
    const tax = subtotal *.05
    const total = tax + subtotal
    return (
      <div className="App">
        <div className="leftSide">
          <h1>My Garage Sale</h1>
          <ProductDisplay products={products} addToCart={this.addToCart} formatPrice = {formatPrice}/>
        </div>

        <div className="rightSide">
          <Cart cart = {cart} formatPrice = {formatPrice} subtotal = {subtotal} total= {total} tax={tax}/>
          <Checkout cart = {cart} formatPrice = {formatPrice} total= {total}/>
          {console.log(total, tax, subtotal)}
        </div>
      </div>
    );
  }
}
