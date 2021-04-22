import React from 'react';
import Product from './Product';


const Products = ({products}) =>{
    const productComponent = products.map((item, i)=>{
        return <Product key={i} data={item} />
    })
    return (
        <main>
            <h2>My Garage Sale</h2>
            {productComponent}
        </main>
    )
}

export default Products;