import React, { Component } from "react";
import productData from "./data/productData.js";
import Catalog from "./Catalog.js";
import "./App.css";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      products: [...prevState.products, product],
    }));
  };
  render() {
    console.log(this.state.products);
    return (
      <div>
        <div className="App">
          <div className="col-1">
            <h2>My Garage Sale</h2>
            <div className="catalog">
              <Catalog products={productData} addToCart={this.addToCart} />
            </div>
          </div>
          <div className="col-2">
            <Cart products={this.state.products} />
            <div>
              <Checkout products={this.state.products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
