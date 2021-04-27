import React, { Component } from "react";
import Product from "./Product.js";

export class Catalog extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <ul className="Products">
        {products.map((elem) => {
          return <Product key={elem.id} product={elem} addToCart={addToCart} />;
        })}
      </ul>
    );
  }
}

export default Catalog;
