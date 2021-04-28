import React from 'react';
import formatPrice from '../helpers/formatPrice'

const shoppingCart = ({cart,subTotal,tax}) => {
    
     
    return (
        <section>
            <h2>Cart</h2>
             <ul>
                 {cart.map(item => {
                     const { name,price,id} = item;
                     return <li key={id}>{name}: {formatPrice(price)}</li>
                 })}
             </ul>
             <h3>Subtotal: {formatPrice(subTotal)}</h3>
             <h3>Tax: {formatPrice(tax)}</h3>
             <h3>Total: {formatPrice(subTotal+tax)} </h3>
        </section>
    )
}

export default shoppingCart;