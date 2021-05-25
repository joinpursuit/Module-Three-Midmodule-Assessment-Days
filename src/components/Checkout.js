// import React, { Component } from 'react'
import React, { useState } from "react";
import "./Checkout.css"

const allNums = (numString) => {
    const numbers = "1234567890";
    for (const char of numString) {
        if (!numbers.includes(char)) return false;
    }
    return true;
}
const validCreditCard = (cardNum) => {
    if (!allNums(cardNum)) return false;
    if ((cardNum[0] === "3" && cardNum.length === 15) || (cardNum[0] !== "3" && cardNum.length === 16)) {
        return true;
    }
    return false;
}
const submitResultMsg = ({ firstName, lastName, email, creditCard, zipCode }, orderTotal) => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()){
        return "Input is not valid.";
    }
    if (!validCreditCard(creditCard)){
        return "Credit card number is not valid.";
    }
    if (zipCode.length !== 5 || !allNums(zipCode)){
        return "Zip code is not valid.";
    }
    return `Purchase complete! $${orderTotal.toFixed(2)} will be charged on your credit card.`;
}

export default function Checkout({ total }) {
    const [ info, setInfo ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        creditCard: "",
        zipCode: ""
    })

    const handleFormInput = (e) => setInfo(prevState => ({...prevState, [e.target.id]: e.target.value }));

    const formSubmit = (e) => {
        e.preventDefault();
        alert(submitResultMsg(info, total));
    }

    const { firstName, lastName, email, creditCard, zipCode } = info;

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFormInput}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleFormInput}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleFormInput}
                />
                <label htmlFor="creditCard">Credit Card</label>
                <input
                    type="text"
                    id="creditCard"
                    value={creditCard}
                    onChange={handleFormInput}
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={handleFormInput}
                />
                <button>Buy Now</button>
            </form>
        </div>
    )
}
/*
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
        alert(submitResultMsg(this.state, this.props.total))
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
*/