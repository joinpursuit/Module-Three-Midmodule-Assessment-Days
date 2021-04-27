import React, { Component } from "react";
import formatPrice from "../helpers/formatPrice";
import "./Checkout.css";

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    };
  }

  submit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;

    if (!firstName || !lastName || !email || !creditCard || !zipCode) {
      window.alert("Input is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(`Purchase complete. You will be charged ${formatPrice(this.props.total)}`);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    let handleChange = this.handleChange;
    return (
      <div>
        <h3>Checkout</h3>
        <form onSubmit={this.submit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
          <br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={handleChange} />
          <br />
          <label htmlFor="creditCard">Credit Card</label>
          <input type="text" id="creditCard" onChange={handleChange} />
          <br />
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" id="zipCode" onChange={handleChange} />
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }
}
