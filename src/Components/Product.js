import React from 'react';
import formatPrice from '../helpers/formatPrice'

const Product = ({data}) =>{
    const {name, price, img, description} = data
    return(
        <div>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button>Add To Cart</button>
            <br/>
            <img src={img} alt=""></img>
            <p>{description}</p>
        </div>
    )
}

export default Product;