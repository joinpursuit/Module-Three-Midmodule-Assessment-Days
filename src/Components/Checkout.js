import React, { Component } from 'react'
import "./Checkout.css"

export class Checkout extends Component {
    constructor(){
        super()

        this.state ={
            fname: "",
            lname: "",
            email: "",
            card: "",
            zip: "",
        }
    }

    updateUserInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    formSubmission = (event) => {
        event.preventDefault()

        if(this.state.lname.length === 0 || this.state.fname.length === 0 || this.state.email.length === 0 ) {
            alert("Input is not valid")
        } else if (this.state.card.length !== 16) {
            alert("Credit card number is not valid")
        } else if (this.state.zip.length !== 5) {
            alert("Zip code is not valid")
        } else {
            alert("Purchase complete! You will be charged $73.49")
        }
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <form onSubmit={this.formSubmission} className="form">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" onChange={this.updateUserInput}/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" onChange={this.updateUserInput}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={this.updateUserInput}/>
                    <label htmlFor="card">Credit Card</label>
                    <input type="text" name="card" id="card" onChange={this.updateUserInput}/>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" name="zip" id="zip" onChange={this.updateUserInput}/>
                    <button>Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Checkout;
