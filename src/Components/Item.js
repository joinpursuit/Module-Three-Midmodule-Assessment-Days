import React from 'react';
import formatPrice from '../helpers/formatPrice'

const item = ({item,addItem}) => {
    const { name, price, description, img} = item;
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button onClick={() => addItem(item)}>Add To Cart</button>
            <img src={img} alt="Pic" />
            <p>{description}</p>
        </li>
    )
}
export default item;