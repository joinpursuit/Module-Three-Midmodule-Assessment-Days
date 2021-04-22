import React from 'react'
import "./Products.css"


const Products = (props) => {
    const {ProductData} = props
    
    console.log(props)

    const product = ProductData.map((e,i) => {
        return (
            <li key={i}>
                <h3>{e.name}</h3>
                <p>Price: ${e.price.toFixed(2)}</p>
                <button>Add To Cart</button>
                <br></br>
                <img src={e.img}></img>
                <p>{e.description}</p>
            </li>
        )
    })
    return (
        <div className="garageSale">
            <h1>My Garage Sale</h1>
            <ul className="Products">
                {product}
            </ul>
        </div>
    )
}

export default Products;
