import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ purchasedCart, subtotal, tax, total }) {
  const cartedItems = purchasedCart.map((product) => {
    return (
      <li key={product.id}>
        {product.name}: {formatPrice(product.price)}
      </li>
    );
  });
  return (
    <div className="cart">
      <h3>Cart</h3>
      <ul>{cartedItems}</ul>
      <h3>Subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(tax)}</h3>
      <h3>Total: {formatPrice(total)}</h3>
    </div>
  );
}

export default Cart;