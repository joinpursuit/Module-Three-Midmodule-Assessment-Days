import React from "react";

export default function Cart({ cart, formatPrice }) {
  const Subtotal = formatPrice(getSubtotal(cart));
  const Tax = formatPrice(tax(getSubtotal(cart)));
  const Total = formatPrice(getSubtotal(cart) + tax(getSubtotal(cart)))
  ;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {console.log(cart)}
        {cart.map((product) => {
          return (
            <li key={product.id}>
              {product.name}: {formatPrice(product.price)}
            </li>
          );
        })}
      </ul>
      <h4>Subtotal: {Subtotal} </h4>
      <h4>Tax: {Tax}</h4>
      <h3>Total: {Total}</h3>
    </div>
  );
}

function getSubtotal(cart) {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price;
  });
  return sum;
}

function tax(subtotal) {
  return subtotal * 0.05;
}
