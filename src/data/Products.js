import React from 'react'

import Product from './Product'
import './Products.css'
function Products ({products, handleClick}) {
    return (
        <div className = "Products">
            {products.map((product,i) => {
                return (
                    <Product
                    key = {i}
                    product = {product}
                    handleClick = {handleClick}
                    
                    />
                )
            })}


        </div>
    )
}


export default Products

