import React, { Component } from "react";
import formatPrice from "../helpers/formatPrice";
import "./Checkout.css";

export default class Checkout extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    if (!firstName || !lastName || !email) {
      alert(`Input is not valid`);
      return;
    }
    if (creditCard.length !== 16 || !creditCard) {
      alert(`Credit card number is not valid`);
      return;
    }

    if (zipCode.length !== 5) {
      alert(`Zip code is not valid`);
      return;
    }

    const { total } = this.props;
    alert(
      `Purchase complete
     Total is ${formatPrice(total)}`
    );
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <div>
        <form
          className="CheckOut"
          action="CheckOut"
          onSubmit={this.handleSubmit}
        >
          <h2>Checkout</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="creditCard">Credit Card</label>
          <input
            type="text"
            name="creditCard"
            id="creditCard"
            onChange={this.handleChange}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            onChange={this.handleChange}
          />

          <button>Buy Now</button>
        </form>
      </div>
    );
  }
}
