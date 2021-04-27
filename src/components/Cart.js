import React from "react";

export default function Cart({ cart, formatPrice, subtotal, tax, total}) {
  

  return (
    <div>
      <h2>Cart</h2>
      <ul key ={cart.id}>
        {console.log(cart)}
        {cart.map((product) => {
          return (
            <li key={product.id}>
              {product.name}: {formatPrice(product.price)}
            </li>
          );
        })}
      </ul>
      <h4>Subtotal: {formatPrice(subtotal)} </h4>
      <h4>Tax: {formatPrice(tax)}</h4>
      <h3>Total: {formatPrice(total)}</h3>
    </div>
  );
}


