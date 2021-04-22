import React from 'react' 
import formatPrice from '../helpers/formatPrice'

function Cart({ cart, subtotal, tax, total  }) {

    let cartList = cart.map((items, i) => {
        return (
            <li key={i}>
                {items.name} : {formatPrice(items.price)}
            </li>
        )
    })
    return (
        <div className='cart'>
            <h2>Cart</h2>
            <ul className="">
                {cartList}
            </ul>
            <p>Subtotal: {formatPrice(subtotal)} </p>
            <p>Tax: {formatPrice(tax)} </p>
            <p>Total: {formatPrice(total)}</p>
            
        </div>
    )
}

export default Cart