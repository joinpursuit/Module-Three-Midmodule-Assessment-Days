import React from 'react'
import "./SalesItemDetails.css"

const SalesItemDetails = ({item, itemUp}) => {
    const { name, price, description, img } = item;

    return (
        <section className="Products">
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={() => itemUp(item)}>Add To Cart</button>
            <img src={img} />
            <p>{description}</p>
        </section>
    )
}

export default SalesItemDetails
