import React from 'react'

const Cart = ({ inCart, subTotal, tax, total }) => {
	const productList = inCart.map((product) => {
		return (
			<li key={product.id}>
				{product.name}: ${product.price.toFixed(2)}
			</li>
		)
	})

	return (
		<section>
			<h2>Cart</h2>
			<ul>{productList}</ul>
			<h3>Subtotal: ${subTotal.toFixed(2)}</h3>
			<h3>Tax: ${tax.toFixed(2)}</h3>
			<h3>Total: ${total.toFixed(2)}</h3>
		</section>
	)
}

export default Cart
