import React from "react";
import formatPrice from "../helpers/formatPrice";

function Product(props) {
  const { name, price, img, description, addToCart, product } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {formatPrice(price)}</p>
      <p>{description}</p>
      <img src={img} alt={name} />
      <br />
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default Product;
