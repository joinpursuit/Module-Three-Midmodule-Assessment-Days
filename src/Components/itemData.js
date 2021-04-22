import React from 'react'
import Product from './Product'

function ItemData({ itemData }) {
	const products = itemData.map((item, i) => {
		return (
			<Product
				key={i}
            {...item}
				// name={item.name}
				// price={item.price}
				// description={item.description}
				// img={item.img}
			/>
		)
	})
	return <div>{products}</div>
}

export default ItemData
