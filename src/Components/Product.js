import React from 'react'
import LayOut from './LayOut'

function Product ({ items, addCart }) {
 const products = items.map((data)=>{
          return  (<LayOut key={data.id} items={data} addCart={addCart}/>)
        
    })

    return(
    <div className="Products">
        <section className="items">Items{products}</section>
    </div>
    )
    
}

export default Product;