import React from 'react'
import Product from "./Product"
import './Products.css'

export default function Products(props) {
    const {productData, handleClick} = {...props}

    return (
        <div className='Products'>
            {productData.map((product) => {
                return(
                    <Product product={product} handleClick={handleClick} />
                )
            })}
        </div>
    )
}
