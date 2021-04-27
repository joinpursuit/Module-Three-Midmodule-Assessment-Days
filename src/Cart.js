import React, { Component } from "react";

export class Cart extends Component {
  render() {
    const { products } = this.props;
    const subtotal = () => {
      let sum = 0;
      products.forEach((elem) => {
        sum += elem.price;
      });
      return sum;
    };
    const tax = () => {
      let sum = 0;
      products.forEach((elem) => {
        sum += elem.price;
      });
      return 0.05 * sum;
    };
    return (
      <div>
        <h2>Cart</h2>
        <ul className="cart">
          {products.map((elem, i) => {
            return (
              <li key={i}>
                {elem.name}: ${elem.price.toFixed(2)}
              </li>
            );
          })}
        </ul>
        <h3>Subtotal: ${subtotal().toFixed(2)}</h3>
        <h3>Tax: ${tax().toFixed(2)}</h3>
        <h3>Total: ${(tax() + subtotal()).toFixed(2)}</h3>
      </div>
    );
  }
}

export default Cart;
