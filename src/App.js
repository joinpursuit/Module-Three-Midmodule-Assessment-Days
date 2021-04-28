import React, { Component } from 'react'
import Products from './Components/Products'
import productData from './data/productData'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

class App extends Component {
	constructor() {
		super()

		this.state = {
			inCart: [],
		}
	}

	addToCart = (product) => {
		const { inCart } = this.state
		this.setState({
			inCart: inCart.concat(product)

		})
	}

	render() {
		const { inCart } = this.state
		const subTotal = inCart.reduce((sum, product) => sum + product.price, 0)
		const tax = subTotal * 0.05
		const total = subTotal + tax

		return (
			<div>
				<Products products={productData} addToCart={this.addToCart}/>
				<Cart inCart={inCart} subTotal={subTotal} tax={tax} total={total} />
				<Checkout total={total}/>
			</div>
		)
	}
}

export default App
