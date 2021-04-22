import React from 'react'

const Cart = ({iwannabuy, totalPrice, tax, subtotalPrice}) => {
 const inCart = iwannabuy.map(product => {
     return (
         <li key={product.id}>{product.name}: ${product.price.toFixed(2)}</li>
     )
 })

 return (
     <div>
<h3>Cart</h3>
<ul>
    {inCart}
</ul>
<h5>Subtotal: ${0.00 || subtotalPrice.toFixed(2)}</h5>
<h5>Tax: ${0.00 || tax.toFixed(2)}</h5>
<h5>Total: ${0.00 || totalPrice.toFixed(2)}</h5>
     </div>
 )
}

export default Cart