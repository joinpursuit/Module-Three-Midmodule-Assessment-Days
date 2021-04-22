import React, { Component } from "react";

export class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { name, price, img, description } = product;
    return (
      <li className="product">
        <h3>{name}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
        <br />
        <img src={img} alt="" />
        <p>{description}</p>
      </li>
    );
  }
}

export default Product;
