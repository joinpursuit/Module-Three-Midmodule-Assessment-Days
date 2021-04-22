import React from 'react'

export default function Item(prop) {

    return (
        <div>My Garage Sale
            <h2>{prop.name}</h2>
            <div>{prop.price}</div>
            <button>Add To Cart</button>
            <img
                alt='pic'
                src={prop.img}/>
            <div>{prop.description}</div>
        </div>
    )
}
