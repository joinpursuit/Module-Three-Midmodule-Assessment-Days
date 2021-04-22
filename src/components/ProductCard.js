import React from 'react'

export default function ProductCard({name, price, img, description, id, key,addToCart, formatPrice}) {
    const product = {name, price, id,}
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <img src={img} alt={name}/>
            
            <p>{description}</p>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    )
}
