import React from 'react'
import "./ProductCard"

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <h3>{props.name}</h3>
            <p>Price: ${props.price.toFixed(2)}</p>
            <button onClick={(e) => props.addToCart(props)}>Add To Cart</button>
            <br/><br/>
            <img src={props.img} alt={props.name} />
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard
