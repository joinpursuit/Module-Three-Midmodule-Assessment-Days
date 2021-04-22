import React from 'react'

const SalesItemDetails = ({item, itemUp}) => {
    const { name, price, description, img } = item;
    return (
        <div>
            <h3>{name}</h3>
            Price: ${price.toFixed(2)}
            <button onClick={() => itemUp(item)}>Add To Cart</button>
            <img src={img} />
            <p>description</p>
        </div>
    )
}

export default SalesItemDetails
