import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="ProductCard">
            <h3>{props.name}</h3>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
            <img src={props.image} alt={props.name}/>
            <p>{props.description}</p>
            
        </div>
    )
};
