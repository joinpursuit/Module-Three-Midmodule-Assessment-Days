import React, { Component } from "react";
import "./CheckoutForm.css";
import formatPrice from "../helpers/formatPrice";

export class CheckoutForm extends Component {
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

handledInputs = (e) => {
let key = e.target.id;
let value = e.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;

    if (!firstName || !lastName || !email || !creditCard || !zipCode) {
      window.alert("Input is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else {
      window.alert(`Purchase completed ${formatPrice(this.props.total)}`);
    }
  };

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label >First Name</label><input id="firstName" onChange={this.handledInputs}></input>
          <label >Last Name</label><input id="lastName"  onChange={this.handledInputs}></input>
          <label >Email</label><input id="email"  onChange={this.handledInputs}></input>
          <label >Credit creditCard</label><input id="creditCard"  onChange={this.handledInputs}></input>
          <label >Zip Code</label><input id="zipCode" onChange={this.handledInputs}></input>
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }   
}

export default CheckoutForm;