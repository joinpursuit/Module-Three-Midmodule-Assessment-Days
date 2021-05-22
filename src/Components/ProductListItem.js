import React from 'react'

function ProductListItem({item, addToCart}) {

    const {name, price, img, description, id} = item

    return (
        <li key={id}>
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <button onClick={()=>addToCart(item)}>Add To Cart</button>
        <img src={img} alt="item"/>
        <p>{description}</p>
    </li>
    )
}

export default ProductListItem
