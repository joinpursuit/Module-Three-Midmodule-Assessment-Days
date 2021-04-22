import React from 'react';
import formatPrice from '../helpers/formatPrice'

const Product = (props) =>{
    return(
        <div>
            <h3>{props.data.name}</h3>
            <p>Price: {formatPrice(props.data.price)}</p>
            <button>Add To Cart</button>
            <br/>
            <img src={props.data.img}></img>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Product;