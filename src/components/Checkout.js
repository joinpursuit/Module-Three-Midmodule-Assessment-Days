import React, { Component } from "react";
import "./Checkout.css";

export default class Checkout extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
    cart: cart
  };
  handleSubmit = (e) => {
    e.preventDefault();
    
  };
  handleChange = (e) => {
    e.preventDefault();
  };

  render() {
    const {cart} = this.state
    return (
      <div>
        <form
          className="CheckOut"
          action="CheckOut"
          onSubmit={this.handleSubmit}
        >
          <h2>Checkout</h2>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="creditCard">Credit Card</label>
          <input type="text" name="creditCard" id="creditCard" />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" name="zipCode" id="zipCode" />

          <button
            onClick={() => {
              alert(getTotal(cart,cart));
            }}
          >
            Buy Now
          </button>
        </form>
      </div>
    );
  }
}

function alert() {
  alert("tamo activo");
}
// const Subtotal = formatPrice(getSubtotal(cart));
// const Tax = formatPrice(tax(getSubtotal(cart)));
// const Total = formatPrice(getSubtotal(cart) + tax(getSubtotal(cart)))
  ;
function getSubtotal(cart) {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price;
  });
  return sum;
}

function tax(subtotal) {
  return subtotal * 0.05;
}

function getTotal (cart){
  const Subtotal = formatPrice(getSubtotal(cart));
  const Tax = formatPrice(tax(getSubtotal(cart)));
 return formatPrice(getSubtotal(cart) + tax(getSubtotal(cart)))
}