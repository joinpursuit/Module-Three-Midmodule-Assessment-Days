import React from 'react'

function Product(props) {
    const {product:{name,description,img,price},dollarPrice,addToCart} = props
    
    const addHandler = () =>{
        addToCart(name,price)
    }

    return (
       <div className="productBox">
           <h3>{name}</h3>
           <label>Price: {dollarPrice(price)} </label>
           <br />
           <button onClick={addHandler}>Add To Cart</button>
           <br />
           <img src={img} alt={name}/>
           <p>{description}</p>
       </div>
    )
}

export default Product

