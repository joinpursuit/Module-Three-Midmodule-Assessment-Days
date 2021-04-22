import React from 'react'

function Product(props) {
    
    return (
        <div className='Product'>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <button handleClick={props.handleClick}>Add To Cart</button><br/>
            <img src={props.image}/>
            <p>{props.description}</p>
        </div>
    )
}

export default Product