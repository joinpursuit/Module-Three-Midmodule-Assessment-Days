import React, { Component } from 'react'

export default class Checkout extends Component {
    constructor(){
        super()
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: ''
        }
    }
    checkoutForm = (event) => {
        event.preventDefault()
        const {firstName, lastName, email, creditCard, zipCode} = this.state
        if (!firstName || !lastName || !email || !creditCard || !zipCode) {
            window.alert("Input is not valid")
        } else if (creditCard.length !== 16){
            window.alert("Credit card number is not valid")
        } else if (zipCode.length !== 5){
            window.alert("Zip code is not valid")
        } else {
            //window alert does not follow jsx rules ${}
            window.alert(`Purchase complete! \n You will be charged $${this.props.realTotal.toFixed(2)}.`)
        }
    }
    handleChange = (e) => {        
        this.setState({ [e.target.id] : e.target.value})
    }
    render() {
        return (
            <div>
                <h1>Checkout</h1>
                <form onSubmit={this.checkoutForm}>
                    <label htmlFor="firstName">First Name</label> 
                    <br></br>
                    <input type="text" id="firstName" onChange={this.handleChange}></input> 
                    <br></br>
                    <label htmlFor="lastName">Last Name</label> 
                    <br></br>
                    <input type="text" id="lastName" onChange={this.handleChange}></input> 
                    <br></br>
                    <label htmlFor="email">Email</label> 
                    <br></br>
                    <input type="text" id="email" onChange={this.handleChange}></input> 
                    <br></br>
                    <label htmlFor = "creditCard">Credit Card</label> 
                    <br></br>
                    <input type="text" id="creditCard" onChange={this.handleChange}></input>
                    <br></br>
                    <label htmlFor ="zipCode">Zip Code</label> 
                    <br></br>
                    <input type="text" id="zipCode" onChange={this.handleChange}></input> 
                    <br></br>
                    <br></br>
                    <button type="submit">Buy Now</button>
                </form>
            </div>
        )
    }
}
