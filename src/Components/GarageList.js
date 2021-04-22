import React from "react";
import GarageItemList from "./GarageItem";
import TreasureIsland from "./TreasureIsland.css";

export default function GarageList({ products, saleProduct }) {
  return (
    <ul className="TreasureIsland">
      {products.map((product) => {
        return (
          <GarageItemList
            key={product.id}
            product={product}
            saleProduct={saleProduct}
          />
        );
      })}
    </ul>
  );
}
