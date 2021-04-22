import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Cart:</h1>
                <p>Item added, $ x.xx</p>
                <p>Item added, $ x.xx</p>
                <p>Item added, $ x.xx</p>
                <p>Item added, $ x.xx</p>

                <h4>Subtotal:, $ x.xx</h4>
                <h4>Tax: $ x.xx</h4>
                <h4>Total: $ x.xx</h4>

            </div>
        )
    }
}

export default Cart