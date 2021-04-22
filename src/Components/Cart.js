import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ purchase, subtotal, tax, total }) {
  const itemsInCart = purchase.map((product) => {
    return (
      <li key={product.id}>
        {product.name}: {formatPrice(product.price)}
      </li>
    );
  });
  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>{itemsInCart}</ul>
      <h3>Subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(tax)}</h3>
      <h3>Total: {formatPrice(total)}</h3>
    </div>
  );
}

export default Cart;
