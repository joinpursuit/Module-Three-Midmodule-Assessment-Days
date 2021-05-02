import React from 'react';
import formatPrice from '../helpers/formatPrice'

const Product = ({product, addToCart}) =>{
    const {name, price, img, description} = product
    return(
        <div>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <br/>
            <img src={img} alt="item"></img>
            <p>{description}</p>
        </div>
    )
}

export default Product;