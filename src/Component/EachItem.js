import React from 'react'



function EachItem ({ item, addCart, subtotal }){
    const { name, price, img, description} = item;
    return(
        <div className="EachItem">
            <h2><strong>{name}</strong></h2>
            <p>Price: ${price}</p>
            <button onClick={()=>addCart(item)}>Add To Cart</button>
            <br />
            <img src={img} alt=" Item"/>
            <section>{description}</section>
        </div>
    )
}
export default EachItem