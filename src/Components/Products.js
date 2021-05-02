import React from 'react';
import Product from './Product';
import './Products.css'


const Products = ({products, addToCart}) =>{
    const productComponent = products.map(item=>{
        return <Product key={item.id} product={item} addToCart={addToCart} />
    })
    return (
        <main className='Products'>
            <h2>My Garage Sale</h2>
            {productComponent}
        </main>
    )
}

export default Products;