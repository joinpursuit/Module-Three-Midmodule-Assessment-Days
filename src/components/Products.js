import React from 'react'
import Product from './Product'

function Products(props) {
    

    let productItems = props.productData.map((product, i) => {
        return <Product key={i} handleClick={props.handleClick} name={product.name} price={product.price} image={product.img} description={product.description} />
    })

    return (
        <div className="Products">
            {productItems}
        </div>
    )
}

export default Products

// Product.js
// {Props}
// <Name>
// <price>
// <button>
// <image>
// <description>