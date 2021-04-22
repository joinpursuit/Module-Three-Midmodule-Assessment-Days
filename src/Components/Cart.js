import React from 'react'

function Cart(props) {

    const items = props.displayCart.map((item, i) => {
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

            <h3>Subtotal: </h3>
            <h3>Tax: </h3>
            <h3>Total: </h3>
        </div>

    )
}

export default Cart
