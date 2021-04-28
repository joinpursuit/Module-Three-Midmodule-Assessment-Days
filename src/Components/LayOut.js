import React from 'react'

function LayOut ({items, addCart}){
    const { name, price, description, img} = items
    let itemPrice = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
    
    return(
        <div className="LayOut">
        <h2>{name}</h2>
        <p>Price: {itemPrice}</p>
        <button onClick={()=>addCart(items)}>Add To Cart</button>
        <img src={img} alt="item"/>
        <p>{description}</p>
        </div>
    )
}

export default LayOut;