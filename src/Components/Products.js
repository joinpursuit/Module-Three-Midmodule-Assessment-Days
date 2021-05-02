import React from 'react';
import Product from './Product';
import './Products.css'


const Products = ({products}) =>{
    const productComponent = products.map(item=>{
        return <Product key={item.id} data={item} />
    })
    return (
        <main className='Products'>
            <h2>My Garage Sale</h2>
            {productComponent}
        </main>
    )
}

export default Products;