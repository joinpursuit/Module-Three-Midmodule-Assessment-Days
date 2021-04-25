import React from 'react'

function Cart(props) {


    // let cartItems = props.productData.map((item, index) => {
    //     return <CartItems key={index} name={item.name} price={item.price} />
    // })

    let cartItems = props.cartItems.map((item) => {
        return <li>{item.name}: ${item.price.toFixed(2)}</li>
    })


    return (
        <div className='Cart'>
            <h1>Cart</h1>
            <ul>
                {cartItems}
            </ul>
            <h2>Subtotal: ${props.subTotal}</h2>
            <h2>Tax: ${props.tax}</h2>
            <h2>Total: ${props.total}</h2>
        </div>
    )
}

export default Cart