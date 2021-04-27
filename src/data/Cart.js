import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ addCart, subtotal, tax, total }) {
  const cartList = addCart.map((item) => {
    return (
      <li key={item.id}>
        `{item.name}: {formatPrice(item.price)}`
      </li>
    );
  });
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="">{cartList}</ul>
      <p>Subtotal: {formatPrice(subtotal)} </p>
      <p>Tax: {formatPrice(tax)} </p>
      <p>Total: {formatPrice(total)}</p>
    </div>
  );
}

export default Cart;
