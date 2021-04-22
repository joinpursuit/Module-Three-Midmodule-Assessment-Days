import React, { Component } from 'react'

export class Checkout extends Component {
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            credit: "",
            zip: ""
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0 || this.state.credit.length === 0 || this.state.zip.length === 0) {
            alert(`Input is not valid`)
        } else if (this.state.credit.length < 16) {
            alert(`Credit card number is not valid`)
        } else if (this.state.zip.length < 5){
            alert(`Zip code is not valid`)
        } else {
            alert(`Purchase complete`)
        }

        






        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Checkout</h3>
                <label>First Name
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                </label>

                <label>Last Name
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                </label>

                <label>Email
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                </label>

                <label>Credit Card
                    <input type="text" name="credit" value={this.state.credit} onChange={this.handleChange}></input>
                </label>

                <label>Zip Code
                    <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange}></input>
                </label>
                <button>Buy Now</button>    
            </form>
        )
    }
}

export default Checkout
