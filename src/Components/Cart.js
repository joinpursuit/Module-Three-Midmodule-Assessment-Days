import React, { Component } from 'react'
import "./Cart.css"


export class Cart extends Component {
    // constructor(){
    //     super()
    
    //     this.state = {
    //       products: [],
    //       subTotal: "0",
    //       tax: this.state.subTotal * 0.05,
    //       total: this.state.subTotal + this.state.tax,
    //     }
    // } 

    render() {
        return (
            <div>
                <h2>Cart </h2>
                <h3>Subtotal: </h3>
                <h3>Tax: </h3>
                <h3>Total: </h3>
            </div>
        )
    }
}

export default Cart
