import React, { Component } from "react";

export class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      creditCard: "",
    };
  }

  handleSubmit = (e) => {
    const { firstName, lastName, email, zipCode, creditCard } = this.state;
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
    e.preventDefault();
    if (firstName && lastName && email && zipCode && creditCard) {
      if (!isNaN(creditCard) && !isNaN(zipCode)) {
        alert(
          `Purchase complete. You will be charged: $${(
            tax() + subtotal()
          ).toFixed(2)}`
        );
      } else {
        alert("Input is not valid");
      }
    } else {
      alert("Input is not valid");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { firstName, lastName, email, zipCode, creditCard } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Checkout</h2>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            onChange={this.handleChange}
            name="firstName"
            type="text"
            id="firstName"
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            onChange={this.handleChange}
            name="lastName"
            type="text"
            id="lastName"
            value={lastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            id="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="creditCard">Credit Card</label>
          <br />
          <input
            onChange={this.handleChange}
            name="creditCard"
            type="text"
            id="creditCard"
            value={creditCard}
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <br />
          <input
            onChange={this.handleChange}
            name="zipCode"
            type="text"
            id="zipCode"
            value={zipCode}
          />
        </div>
        <br />
        <button type="submit">Buy Now</button>
      </form>
    );
  }
}

export default Checkout;
