import React from 'react'


const Stored =({shopping, handleData})=> {
    const {name, price, description, img}= shopping
    return (
        <li className='each'>
            <h3>{name}</h3> 
             Price: ${price.toFixed(2)}
             
            <button onClick={()=> handleData(shopping)}>Add To Cart</button>
            
            <img src={img} alt='shopping' />
            <p>{description}</p>
       </li>
    )
}
export default  Stored