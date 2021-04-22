import React from 'react'
import "./Products"
import formatPrice from '../helpers/formatPrice'

function Product ({product,handleClick}) {
    const {name,price, img, description} = product
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            {"\n"}
            {/* <button>Add to Cart</button> */}
            <button onClick={()=> handleClick(product)}>Add to Cart</button>
            <br></br>
            <img src={img} alt="product"/>
            <p>{description}</p>
        </div>
    )
}
export default Product