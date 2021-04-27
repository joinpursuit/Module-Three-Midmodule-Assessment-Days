import React from "react";
import formatPrice from "../helpers/formatPrice";

function Product(product) {
  const { name, price, img, description, item, addedCart } = product;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {formatPrice(price)}</p>
      <button onClick={() => addedCart(item)}>Add To Cart</button>
      <img src={img} alt={name} />
      <p>{description}</p>
    </div>
  );
}
export default Product;
