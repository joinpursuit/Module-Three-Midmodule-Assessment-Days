import React from 'react'
function AddToCart ({ cart, totalSum }){
    console.log(totalSum)
    
   const cartCollection = cart.map((item)=>{
        return <li> {item.name}: {item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</li>

    })
    let tax = totalSum * 0.05
    let total = tax + totalSum
   
    return(
        <div>
            <h2>Cart</h2>
            <ul>{cartCollection}</ul>
            <h3>Subtotal: ${totalSum.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>

    )
}
export default AddToCart;