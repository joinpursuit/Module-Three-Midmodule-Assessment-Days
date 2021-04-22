import React from 'react'

class Checkout extends React.Component() {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '', 
            email: '',
            cardNum: '',
            zipCode: ''
        }
    }

    render() {
        const { firstName, lastName, email, cardNum, zipCode } = this.state
        return (
        <div>
            <h2>Checkout</h2>
            <form>
                <label>First Name</label>
                <input 
                    type='text' 
                    name='firstName'
                    value={firstName}
                />
                <label>Last Name</label>
                <input 
                    type='text' 
                    name='lastName'
                    value={lastName}
                />
                <label>Email</label>
                <input 
                    type='text' 
                    name='email'
                    value={email}
                />
                <label>Credit Card</label>
                <input 
                    type='number' 
                    name='creditCard'
                    value={cardNum}
                />
                <label>Zip Code</label>
                <input 
                    type='number' 
                    name='zipcode'
                    value={zipCode}
                />
                <button type='submit'>Buy Now</button>
            </form>
        </div>
    )
    }
}

export default Checkout
