import React from 'react'

const Stored =({shopping, handleData})=> {
    const {name, price, description, img}= shopping
    return (
        <div>
            <div className='each'>
               <h2>{name}</h2> 
               <p>Price: ${price}</p>
               <button onClick={()=> handleData(shopping)}>Add to Cart</button>
               <br></br>
               <img src={img} alt='shopping' />
               <p>{description}</p>

            </div>
            
        </div>
    )
}
export default  Stored