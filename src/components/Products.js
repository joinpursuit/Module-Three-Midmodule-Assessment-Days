import React from 'react'
import Product from "./Product"
import "./Products.css"

export default function Products({ productsList, addToCart }) {
    return (
        <ul className="Products">
            {productsList.map((product, i) => (
                <Product
                    product={product}
                    addToCart={addToCart}
                    key={i}
                />
            ))}
        </ul>
    )
}
