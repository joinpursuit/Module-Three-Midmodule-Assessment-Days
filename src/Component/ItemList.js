import React from 'react'
import data from '../data/productData';
import EachItem from './EachItem';
import './ItemList.css'

const ItemList = ({addCart, subtotal })=> {
    const items = data.map(item=>{
        return <EachItem  key={item.id} item={item} addCart={addCart} subtotal={subtotal}/>   
      })
    return(
        <div className="ItemList">
           <ul>
               {items}
           </ul>
        </div>
    )

}
export default ItemList