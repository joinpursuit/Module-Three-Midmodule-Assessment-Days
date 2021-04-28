import ProductCard from "./ProductCard"
import React from 'react'

const Products = ({products}) => {
    const cards = products.map((e) =>{
        return <ProductCard key={e.id} products={e}/>
    })
    return (
    <section className="Products">{cards}</section>
    )
}

export default Products

