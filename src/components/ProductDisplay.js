import React from "react";
import formatPrice from "../helpers/formatPrice";
import ProductCard from "./ProductCard";
import "./Products.css";
export default function ProductDisplay({ products ,addToCart, formatPrice}) {
  return (
    <section className="Products">
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          description={product.description}
          addToCart = {addToCart}
          formatPrice = {formatPrice}
        />
      ))}
    </section>
  );
}
