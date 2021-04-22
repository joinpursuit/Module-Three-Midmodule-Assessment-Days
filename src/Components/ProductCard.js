import React from 'react';
import FormatPrice from '../helpers/formatPrice';

function ProductCard(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button type='button' onClick={(e) => props.addProduct(props.id)}>Add To Cart</button>
            <img src={props.image} alt={props.name}></img>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard
