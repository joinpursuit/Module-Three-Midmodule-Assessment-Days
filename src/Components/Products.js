import React from 'react'
import Product from "./Product"
import "./Products.css"

function Products({data, addToCart}) {
    return (
        <div className = "Products"> 
           {data.map(item => {
           return(
            <Product 
            key = {item.id}
            name = {item.name}
            price = {item.price}
            img = {item.img}
            description = {item.description}
            item = {item}
            addToCart = {addToCart}
           />
           )
        })}

        </div>
    )
}

export default Products
