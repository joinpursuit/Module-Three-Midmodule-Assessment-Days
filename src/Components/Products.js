import React from 'react'
import ProductCard from './ProductCard'
import './Products.css'

const Products = ({ products, addToCart }) => {
   const items = products.map(product => {
      return <ProductCard product={product} key={product.id} addToCart={addToCart}/>
   })


   return (
      <section className='Products'>
         <h1>My Garage Sale</h1>
            {items}
      </section>
   )
}

export default Products