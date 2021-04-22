import React from 'react'
import ProductCard from "./ProductCard"
import "./ProductList.css"

function ProductList({products, addToCart}) {
    return (
        <section className="Products">
            {products.map((product, i) => (
                <ProductCard 
                    {...product} 
                    key={product.id} 
                    addToCart={addToCart} 
                />
            ))}
        </section>
    )
}

export default ProductList
