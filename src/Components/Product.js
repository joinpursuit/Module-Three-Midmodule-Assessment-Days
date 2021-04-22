import React from 'react'
import './Products.css'

const Product =(props)=>{
    const {name, price, img, addProduct, description }= props
    const addCart =(event)=>{ 
        addProduct(name,price)

    }
    return (
        <li className = "product" >
         <h3>{name}</h3>
         <p>Price: {price.toFixed(2)}</p>
         <button onClick ={addCart}>Add To Cart</button>
         <img src = {img} />
         <p>{description}</p>
        </li>
    )
}
export default Product;