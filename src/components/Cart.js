import React from 'react'

function Cart(props) {



    return (
        <div className='Cart'>
            <h1>Cart</h1>
            <ul>
                <li>{props.name}</li>
            </ul>
            <h2>Subtotal: </h2>
            <h2>Tax: </h2>
            <h2>Total: </h2>
        </div>
    )
}

export default Cart