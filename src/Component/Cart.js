import React from "react";
function Cart ({cart, subtotal}) {
    return (
        <div className="">
        <h2>Enrolled</h2>
        <ul>
            {cart.map((item)=>{
                return <li>{item.name} ${item.price}</li>
            })}
        </ul>
        <h3>Subtotal: 
            {subtotal}
            {/* {subtotal.reduce((acc,curr)=> acc + curr)} */}
            </h3>
        <h3>Tax: ${subtotal * .05}</h3>
        <h3>Total:${(subtotal * .05) + subtotal}</h3>
        </div>
        )
}

export default Cart