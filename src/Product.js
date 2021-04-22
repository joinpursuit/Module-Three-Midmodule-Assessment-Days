import React from 'react'

export default function Product(props) {
    const { product } = props
    const alt = "photo"
    return (
       
            <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            {/* <button onClick={() => addToCart(product)}>Add To Cart</button> */}
            <img src={product.img} alt={alt}/>
            <p>{product.description}</p>
           

        </li>
     
    )
}
