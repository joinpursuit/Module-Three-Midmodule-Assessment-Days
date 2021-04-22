import React from "react";

const GarageItemList = ({ product, saleProduct }) => {
  const { name, price, description, img } = product;

  return (
    <li>
      <h3>{name}</h3>
      Price: ${price.toFixed(2)}
      <button onClick={() => saleProduct(product)}>Add To Cart</button>
      <img src={img} alt="products" />
      <p>{description}</p>
    </li>
  );
};

export default GarageItemList;
