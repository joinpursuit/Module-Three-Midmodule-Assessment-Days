import React from 'react';

const Cart = ({cart}) =>{
    const itemList = cart.map((item, i)=>{
        return (
            <li key={i}>{item.name}: {item.price}</li>
        )
    })
    return (
        <aside>
            <h2>Cart</h2>
            <ul>
                {itemList}
            </ul>
            <h3>Subtotal:</h3>
            <h3>Tax:</h3>
            <h3>Total:</h3>
        </aside>
    )
}

export default Cart;