import React from 'react'

export default function Shops({items, sub, taxes, total}) {
    return (
        <div >
            <h1>Cart</h1>
            {items.map(choice => <li>{choice.name} : {choice.price}</li>)}
            <h3>Subtotal:${sub.toFixed(2)}</h3>
            <h3>Tax: ${taxes.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    )
}
