//checkout section has inputs and labels for First Name, Last Name, Email, Credit Card, and Zip Code, button that says Buy Now
//create label elements for inputs

import React from 'react'
import formatPrice from '../helpers/formatPrice'

export class Checkout extends React.Component {
    constructor() {
        super()

        this.state = {
            first_name : "",
            last_name : "",
            email : "",
            card: "",
            zip: "",
        }
    }

    render () {
        const { first_name , last_name , email , card , zip } = this.state 
        return (
            <form>
                <h1>Checkout</h1>
                <label htmlFor="firstName">First Name</label> 
                    <input type="text" id="firstName" ></input> 
                    <label htmlFor="lastName">Last Name</label> 
                    <input type="text" id="lastName" ></input> 
                    <label htmlFor="email">Email</label> 
                    <input type="text" id="email" ></input> 
                    <label htmlFor = "creditCard">Credit Card</label> 
                    <input type="text" id="creditCard" ></input>
                    <label htmlFor ="zipCode">Zip Code</label> 
                    <input type="text" id="zipCode" ></input> 
                    <button type="submit">Buy Now</button>

            </form>
        )
    }
    
}

export default Checkout;