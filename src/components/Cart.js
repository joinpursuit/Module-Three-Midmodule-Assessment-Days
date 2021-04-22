import React from 'react'

function Cart(props) {
    const {purchased, dollarPrice, payStore} = props

    const displayCart = purchased.map((purchase,i)=>{
        return(
            <li key={i}>
                {purchase.prodName}: {dollarPrice(purchase.price)}
            </li>
        )
    })
    return (
        <section className="cart">
            <h1>Cart</h1>
            <ul>
                {displayCart}
            </ul>
            <h3>Subtotal: {dollarPrice(payStore[0])}</h3>
            <h3>Tax: {dollarPrice(payStore[1])}</h3>
            <h3>Total: {dollarPrice(payStore[2])}</h3>
        </section>
    )
}

export default Cart
