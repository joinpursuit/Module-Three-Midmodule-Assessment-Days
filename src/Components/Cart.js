import React from 'react'
import formatPrice from "../helpers/formatPrice"

function Cart({addedToCart, subtotal, tax, total}) {
    const cartItems = addedToCart.map(item => {
        return(
            <li key = {item.id}>
            {item.name}: {formatPrice(item.price)}
            </li>
        )
    })
    return (
        <div className="cart">
            <h1>Cart</h1>
            <ul>
                {cartItems}
            </ul>
            <h3>Subtotal: {formatPrice(subtotal)}</h3>
            <h3>Tax: {formatPrice(tax)}</h3>
            <h3>Total: {formatPrice(total)}</h3>
        </div>
    )
}

export default Cart
