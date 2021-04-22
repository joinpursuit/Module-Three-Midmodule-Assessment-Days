import React from 'react'
import formatPrice from '../helpers/formatPrice'

function Product({ name, price, description, img }) {
	return (
		<div className='itemsData'>
			<h3>{name}</h3>
			<p>Price: {formatPrice(price)}</p>
			<button>Add To Cart</button>
			<br />
			<img src={img} />
			<p>{description}</p>
		</div>
	)
}

export default Product