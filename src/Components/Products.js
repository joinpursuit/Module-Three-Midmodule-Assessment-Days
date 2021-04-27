import React from 'react'
import Product from './Product'
import './Products.css'

const Products =({ productData, addProduct}) => {
    return (
        <div>
            <h1>My Garage Sale</h1>
            <ul className ="Products" >
                {productData.map((product)=>{
                   return (
                     <Product
                     product ={product}
                     key ={product.id}
                     addProduct={addProduct}
                     />
                   )
                })}

            </ul>
        </div>
    )
}
export default Products;