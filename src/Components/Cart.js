import React from 'react'

export default function Cart(props) {
    const {chosenProducts, subTotal, tax, realTotal} = {...props}
    let checkoutCart = chosenProducts.map((product, i) => {
        return(
            <li key = {i}>
                {product.name}: ${product.price.toFixed(2)}
            </li>
        )
    })
    return (
        <div>
            <h1>Cart</h1>
            <ul className='cartItems'>
                {checkoutCart}
            </ul>
            <h2>Subtotal: ${subTotal.toFixed(2)}</h2>
            <h2>Tax: ${tax.toFixed(2)}</h2>
            <h2>Total: ${realTotal.toFixed(2)}</h2>
        </div>
    )
}
