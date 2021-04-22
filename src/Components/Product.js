import React from 'react';
import formatPrice from '../helpers/formatPrice'

const Product = (props) =>{
    return(
        <div>
            <h3>{props.data.name}</h3>
            <p>Price: {formatPrice(props.data.price)}</p>
            <button onClick={props.addItems}>Add To Cart</button>
            <br/>
            <img src={props.data.img} alt=""></img>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Product;