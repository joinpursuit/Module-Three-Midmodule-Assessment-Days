import React from 'react'
import "./Products.css"


const Products = (props) => {
    console.log(props)
    const {ProductData} = props

    const helperFunction = ProductData.map((e,i) => {
        return (
            <li key={i}>
                <h3>{e.name}</h3>
                <p>Price: ${e.price.toFixed(2)}</p>
                <button>Add To Cart</button>
                <img src={e.img}></img>
                <p>{e.description}</p>
            </li>
        )
    })
    return (
        <div>
            <h1>My Garage Sale</h1>
            <div>
                {helperFunction}
            </div>
        </div>
    )
}

export default Products;
