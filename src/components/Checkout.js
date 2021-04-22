import React, { Component } from 'react'
import "./Checkout.css"

export default class Checkout extends Component {
  state = {firstName:"", lastName: "", email: "", creditCard: "", zipCode:"",}
  handleSubmit = (e) => {}
  handleChange = (e) => {}

  render() {
      return (
        <div>
          <form className="CheckOut"action="CheckOut" onSubmit={this.handleSubmit}>
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
                alert();
              }}
            >
              Buy Now
            </button>
          </form>
        </div>
      );
  }
}

function alert(){
  alert("tamo activo")
}