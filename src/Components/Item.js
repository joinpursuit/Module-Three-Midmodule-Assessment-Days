import React from 'react';


const item = ({item}) => {
    const { name, price, description, img} = item;
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button>Add To Cart</button>
            <img src={img} alt="Pic" />
            <p>{description}</p>
        </li>
    )
}
export default item;