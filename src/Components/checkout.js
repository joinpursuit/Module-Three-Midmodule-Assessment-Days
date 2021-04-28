import React, { Component } from "react";
import formatPrice from "../helpers/formatPrice";
import "./Checkout.css";

export class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      card: "",
      zip: "",
    };
  }

  handleInput = (e) => {
    let key = e.target.id;
    let value = e.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, card, zip } = this.state;

    if (!first_name || !last_name || !email || !card || !zip) {
      window.alert("Input is not valid");
    } else if (zip.length !== 5) {
      window.alert("Zip code is not valid");
    } else if (card.length !== 16) {
      window.alert("Credit card number is not valid");
    }else {
      window.alert(`Purchase complete. You will be charged ${formatPrice(this.props.subTotal)}`);
    }
  };

  render() {
    const handleInput = this.handleInput;
    return (
      <div>
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" onChange={handleInput}></input>
          <br/>
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" onChange={handleInput}></input>
          <br/>
          <label htmlFor="email">Email</label>
          <input id="email" onChange={handleInput}></input>
          <br/>
          <label htmlFor="card">Credit Card</label>
          <input id="card" onChange={handleInput}></input>
          <br/>
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" onChange={handleInput}></input>
          <br/>
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
