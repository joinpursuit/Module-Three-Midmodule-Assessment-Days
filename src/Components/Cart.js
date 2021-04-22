import React from 'react'
import './../App.css'
 

 class Cart extends React.Component {
    render() {
        const Cart=({cart,total, tax, subtotal})=>{
            const carry =cart.map(product =>{
                return (
                    <li key ={product.id}> {product.name}: {product.price.toFixed(2)}
                 </li>
                )
            })

        }
        return (
            <div className ="cart">
                <h2>Cart</h2>
                <ul>
                    {carry}
                </ul>
                <h4>Subtal: ${0.00 ||subtotal.toFixed(2)}</h4>
                <h4> Tax: ${0.00 || tax.toFixed(2)}</h4>
                <h4>Total: ${0.00 || total.toFixed(2)}</h4>

            </div>
            
        )
    }
}

export default Cart
