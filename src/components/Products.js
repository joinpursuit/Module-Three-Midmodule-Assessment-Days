import ProductCard from "./ProductCard"
import React from 'react'

const Products = ({product, addToCart}) => {
    const cards = product.map((e) =>{
        return <ProductCard key={e.id} product={e} addToCart={addToCart}/>
    })
    return (
    <section className="Products">{cards}</section>
    )
}

export default Products

