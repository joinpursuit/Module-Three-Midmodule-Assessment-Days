import React from 'react'

const Cart = ({purchase, tax, sub, total}) => {
const entire = purchase.map((gross, i) => {
     return (
         <li key={i}>
             {gross.name}: ${gross.price.toFixed(2)}
         </li>
     );
 });

 return (
     <>
    <h1>Cart</h1>
    <ul>
        {entire}
    </ul>
    <h4>Subtotal: ${sub.toFixed(2)}</h4>
    <h4>Tax: ${tax.toFixed(2)}</h4>
    <h4>Total: ${total.toFixed(2)}</h4>
  </>
 )

};

export default Cart;
