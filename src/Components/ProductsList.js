import React from 'react'
import productData from "../data/productData"
import ProductListItem from "./ProductListItem"
import "./Products.css"

function ProductsList(props) {

    const {addToCart} = props

    const itemList = productData.map((item, i) =>{
        return <ProductListItem key={i} item={item} addToCart={addToCart}/>
    })

    return (
        <ul className="Products">
            {itemList}   
        </ul>
    )
}

export default ProductsList
