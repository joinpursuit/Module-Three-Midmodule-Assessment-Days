import React from 'react'
import Item from './Item'

const ItemList=({props}) =>{
    return (
        <div>
            <h2>My Garage Sale</h2>
            {props.data.map(item => {
                return (
                    <div className="Items" >
                        <Item item={item} />
                        <button onClick={() => props.addToCart(item)}>Add To Cart</button>
                    </div>
                )
            })}

        </div>
    )
}

export default ItemList
