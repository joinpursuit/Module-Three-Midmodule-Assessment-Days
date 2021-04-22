import React, { Component } from 'react'

export class Checkout extends Component {
    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    <label>First Name:</label>
                    <br></br>
                    <input type="text" placeholder="Enter First Name"></input>
                    <br></br>
                    <label>Last Name:</label>
                    <br></br>
                    <input type="text" placeholder="Enter Last Name"></input>
                    <br></br>
                    <label>Email:</label>
                    <br></br>
                    <input type="text" placeholder="Enter E-mail"></input>
                    <br></br>
                    <label>Credit Card:</label>
                    <br></br>
                    <input type="number" placeholder="Enter Credit Card Number"></input>
                    <br></br>
                    <label>Zip Code:</label>
                    <br></br>
                    <input type="text" placeholder="Enter Zip Code"></input>
                    <br></br>
                    <br></br>
                    <button>Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Checkout
