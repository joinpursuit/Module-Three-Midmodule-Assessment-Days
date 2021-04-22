import React from 'react'
import "./Product.css"

export default function Product({ product, addToCart }) {
    return (
        <li className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <img src={product.img} alt={product.name} />
            <p>{product.description}</p>
        </li>
    )
}