import React from 'react'
import "./Products.css"

function ProductsList(props) {

    const {productData, handleClick} = props

    const itemList = productData.map((item, i) =>{
        return(

            <li key={i}>
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button onClick={handleClick}>Add To Cart</button>
                <img src={item.img} alt="item"/>
                <p>{item.description}</p>
            </li>
        )
    })

    return (
        <ul className="Products">
            {itemList}   
        </ul>
    )
}

export default ProductsList
