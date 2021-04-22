import React from 'react'
import Product from './Product'

function Products (props) {
  const { allProducts, dollarPrice, addToCart } = props

  const displayProducts = allProducts.map(product => {
    return (
      <Product
        product={product}
        key={product.id}
        dollarPrice={dollarPrice}
        addToCart={addToCart}
      />
    )
  })
  return <>{displayProducts}</>
}

export default Products
