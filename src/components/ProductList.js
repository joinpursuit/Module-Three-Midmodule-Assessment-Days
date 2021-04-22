import React from 'react'
import productData from '../data/productData.js'


export default function ProductList() {
    console.log('productData',productData)
    return (
        <div>
            <h1>item</h1>
            <div>price</div>
            <button>Add to Cart</button>
            <img
                alt='pic'></img>
            <div>item description</div>
        </div>
    )
}
