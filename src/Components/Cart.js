import React from 'react';
import formatPrice from '../helpers/formatPrice'

const Cart = ({ items, subTotal, tax, total }) => {
    const listItems = items.map(item=>{
        return (
            <li key={item.id}>{item.name}: ${item.price}</li>
        )
    })
    return (
        <aside>
            <h2>Cart</h2>
            <ul>{listItems}</ul>
            <h3>Subtotal: {formatPrice(subTotal)}</h3>
            <h3>Tax: {formatPrice(tax)}</h3>
            <h3>Total: {formatPrice(total)}</h3>
        </aside>
    )

}

export default Cart;