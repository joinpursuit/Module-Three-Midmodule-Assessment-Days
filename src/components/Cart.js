import React from 'react'

export default function Cart({ cartItemsList, subtotal, tax, total }) {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItemsList.map((item, i) => <li key={i}>{item.name}: ${item.price.toFixed(2)}</li>)}
            </ul>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    )
}
