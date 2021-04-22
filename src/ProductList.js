import React from 'react'
import Product from "./Product"

export default function ProductList(props) {
    // const { productData, addToCart } = props
    return (
        <div>
            <h2>My Garage Sale</h2>
            {props.productData.map(product => {
                return (
                    <div className="Products" >
                        <Product product={product} />
                        <button onClick={() => props.addToCart(product)}>Add To Cart</button>
                    </div>
                )
            })}
            
        </div>
    )
}
