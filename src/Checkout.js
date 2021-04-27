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

  onlyNums = (input) => {
    let arr = input.split("");
    return arr.every((elem) => {
      return !isNaN(elem);
    });
  };

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
      if (!this.onlyNums(creditCard) && this.onlyNums(zipCode)) {
        alert("Input is not valid \nCredit card is not valid");
      }
      if (!this.onlyNums(zipCode) && this.onlyNums(creditCard)) {
        alert("Input is not valid \nZip code is not valid");
      }
      if (!this.onlyNums(zipCode) && !this.onlyNums(creditCard)) {
        alert("Input is not valid Zip code and credit card are not valid");
      } else if (this.onlyNums(zipCode) && this.onlyNums(creditCard)) {
        if (creditCard.length !== 16 && zipCode.length === 5) {
          alert("Input is not valid \nCredit card number is not valid");
        }
        if (zipCode.length !== 5 && creditCard.length === 16) {
          alert("Input is not valid \nZip code is not valid");
        }
        if (creditCard.length !== 16 && zipCode.length !== 5) {
          alert("Zip code is not valid\nCredit card is not valid");
        } else if (creditCard.length === 16 && zipCode.length === 5) {
          alert(
            `Purchase complete. You will be charged: $${(
              tax() + subtotal()
            ).toFixed(2)}`
          );
        }
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
    console.log(creditCard);
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
