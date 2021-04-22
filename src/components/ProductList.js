import React from 'react'
import productData from '../data/productData.js'
import Item from './Item.js'

export default function ProductList(prop) {
    // const productData = prop.productData
    // console.log('productData', productData)
    // addItemHandler = () => {      
    // }
    return (
        <ul>
            {productData.map((item) => {
                return (
                    <Item
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        img={item.img}
                    />
               )
           })} 
        </ul>
    )
}
