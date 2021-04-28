import React from 'react';
import ProductData from '../data/productData';
import Item from './Item'




const ItemList = ({addItem}) => {
     
    const item = ProductData.map(item =>{
        return <Item key={item.id} item={item} addItem={addItem} />
    })
    
    return (
        <section className="Items">
            <h2>My Garage Sale</h2>
            <ul>
                {item}
            </ul>
        </section>
    )
}


export default ItemList