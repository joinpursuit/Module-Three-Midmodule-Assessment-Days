import React from 'react'

function Cart(props) {

    const {cartItems, subtotal, total, tax} = props

    const items = cartItems.map((item, i) => {
        return (
            <li key={i}>
                {item.name}: ${item.price.toFixed(2)}
            </li>
        )
    })

    return (
        
        <div>
            <h2>Cart</h2>
            <ul>
                {items} 
            </ul>

            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
        </div>

    )
}

export default Cart
