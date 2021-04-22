import './App.css'
import productData from './data/productData'
import ItemData from './Components/itemData'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

import React, { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)




	}



	render() {


		return (
			<div className='App'>
				<div className='garageSale'>
					<h1>Garage Sale</h1>
					<ItemData itemData={productData} />
				</div>
				<div className='Cart'>
          <Cart />
        </div>
				<div className='Checkout'>
					<Checkout />
				</div>
			</div>
		)
	}
}

export default App
