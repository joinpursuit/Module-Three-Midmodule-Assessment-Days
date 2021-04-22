import React from "react";
import Product from "./Product";
import "./Products.css";

function Products({ data, addToCart }) {
  return (
    <div className="Products">
      {data.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            product={product}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}

export default Products;
