import React from 'react'

const Item =(props)=> {
    return (
        <div className='ItemList'>
            <li>
    <h3>{props.name}</h3>
    <p>price: {props.price.toFixed(2)}</p>
    <button>Add To Cart</button>
    <img src={props.img} alt ={props.name}/>
    <p>{props.description}</p>
        </li>
        </div>
    )
}

export default Item
