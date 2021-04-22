import React, { Component } from 'react'
import "./Checkout.css"

export default class Checkout extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: ""
        }
    }
    handleFormInput = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    formSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, email, creditCard, zipCode } = this.state
        const allNums = (cardNum) => {
            const numbers = "1234567890"
            for(const char of cardNum){
                if(!numbers.includes(char)){
                    return false
                }
            }
            return true
        }
        const validCreditCard = (n) => {
            if(!allNums(n)){
                return false
            } else if(n[0] === "3" && n.length === 15){
                return true
            } else if(n[0] !== "3" && n.length === 16){
                return true
            }
            return false
        }
        if(!firstName.trim() || !lastName.trim() || !email.trim()){
            alert("Input is not valid.")
        } else if(!validCreditCard(creditCard)){
            alert("Credit card number is not valid.")
        } else if(zipCode.length !== 5 || !allNums(zipCode)){
            alert("Zip code is not valid.")
        } else {
            alert(`Purchase complete! $${this.props.total.toFixed(2)} will be charged on your credit card.`)
        }
    }
    render() {
        const { firstName, lastName, email, creditCard, zipCode } = this.state
        return (
            <div className="checkout">
                <h2>Checkout</h2>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={this.handleFormInput}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={this.handleFormInput}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={this.handleFormInput}
                    />
                    <label htmlFor="creditCard">Credit Card</label>
                    <input
                        type="text"
                        id="creditCard"
                        value={creditCard}
                        onChange={this.handleFormInput}
                    />
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={this.handleFormInput}
                    />
                    <button>Buy Now</button>
                </form>
            </div>
        )
    }
}
