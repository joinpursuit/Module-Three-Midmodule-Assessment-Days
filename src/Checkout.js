import React, { Component } from "react";
import "./Checkout.css";

const onlyNums = (str) => {
  const nums = "4111111111111111";
  for (const char of str) {
    if (!nums.includes(char)) return false;
  }
  return true;
};

export default class Checkout extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    creditcard: "",
    zipcode: "",
  };

  checkout = (e, props) => {
    e.preventDefault();
    const { firstname, lastname, email, creditcard, zipcode } = this.state;
    if (creditcard.length !== 16 || !onlyNums(creditcard)) {
      window.alert("Input is not valid. \n Credit card number is not valid");
    } else if (zipcode.length !== 5) {
      window.alert("Input is not valid. \n Zip code is not valid");
    } else if (!firstname || !lastname || !email || !creditcard || !zipcode) {
      window.alert("Input is not valid");
    } else {
      window.alert(
        `Yay! Purchase complete. You will be charged $${this.props.totalPrice.toFixed(
          2
        )}`
      );
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstname, lastname, email, creditcard, zipcode } = this.state;
    return (
      <div>
        <h3>Checkout</h3>
        <br />
        <form onSubmit={this.checkout}>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="creditcard">Credit Card</label>
          <br />
          <input
            type="number"
            name="creditcard"
            id="creditcard"
            maxLength="16"
            minLength="16"
            value={creditcard}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="zipcode">Zip Code</label>
          <br />
          <input
            type="number"
            name="zipcode"
            id="zipcode"
            maxLength="5"
            minLength="5"
            value={zipcode}
            onChange={this.handleChange}
          />
          <br />
          <button>Buy Now</button>
        </form>
      </div>
    );
  }
}
