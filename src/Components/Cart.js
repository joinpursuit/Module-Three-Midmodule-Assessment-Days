import React from "react";

const Cart = ({ garage, taxCalc, subTotal, total }) => {
  let cartReturn = garage.map((treasure, i) => {
    return (
      <li key={i}>
        <strong>
          {treasure.name}: ${treasure.price.toFixed(2)}
        </strong>
      </li>
    );
  });
  return (
    <div>
      <h2>Cart</h2>
      <ul>{cartReturn}</ul>
      <h4>Subtotal: ${subTotal.toFixed(2)}</h4>
      <h4>Tax: ${taxCalc.toFixed(2)}</h4>
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
