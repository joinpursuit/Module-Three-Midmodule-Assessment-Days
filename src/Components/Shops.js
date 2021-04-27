import React from 'react'

const Shops = ({items, sub, taxes, total}) => {
    // let cartRB = items.map((choice, i) => {
    //     return(
    //         <li key= {i}>
    //               <strong>`{choice.name}: ${choice.price.toFixed(2)}`</strong>
    //         </li>
    //     )
    // })
    return (
        <div >
            <h2>Cart</h2>
            <ul>
            {items.map((choice, i) =>  <li key= {i}> <strong>{choice.name}: ${choice.price.toFixed(2)}</strong></li>)}
               {/* {cartRB} */}
            </ul>
            <h4>Subtotal: ${sub.toFixed(2)}</h4>
            <h4>Tax: ${taxes.toFixed(2)}</h4>
            <h4>Total: ${total.toFixed(2)}</h4>
        </div>
    )
}
export default Shops