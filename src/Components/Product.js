import React from 'react'
import './Products.css'

const Product =(props)=>{
    const {product, addProduct }= props
    const addCart =(event)=>{ 
        addProduct(product)

    }
    return (
        <li className = "product" >
         <h3>{product.name}</h3>
         <p>Price: ${product.price.toFixed(2)}</p>
         <button onClick ={addCart}>Add To Cart</button>
         <img src = {product.img} alt ="product" />
         <p>{product.description}</p>
        </li>
    )
}
export default Product;