import React from 'react'
import './../App.css'
 
const Cart = ({cart, total, subtotal, tax}) => {

    let cartList = cart.map(product => {
        return (
            <li key={product.id}> {product.name}: ${product.price.toFixed(2)} </li>
        )
    })

    return (
            <div className ="cart">
                <h2>Cart</h2>
                <ul>
                    {cartList} 
                </ul>
                <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                <h4>Tax: ${tax.toFixed(2)}</h4>
                <h4>Total: ${total.toFixed(2)}</h4>

            </div>
            
    )
}

export default Cart
