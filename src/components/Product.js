import React from 'react'

function Product(props) {
    // This is how you pass in a function as props(for the click event), and then use that function in a roundabout way to retrieve
    // any value from this child component - back to the parent component (App.js)
    const handleBtnClick = (e) => {
        props.handleClick(props.name, props.price)
        console.log(e)
    }
    // You can also write out an anonymous function inline in return, instead of writing out a containg function - handleBtnClick
    //      <button onClick={() => {props.handleClick(props.name, props.price)}}>Add To Cart</button><br/>


    return (
        <div className='Product'>
            <h2>{props.name}</h2>
            <p>Price:${props.price.toFixed(2)}</p>
            <button onClick={() => {props.handleClick(props.name, props.price)}}>Add To Cart</button><br/>
            <img src={props.image}/>
            <p>{props.description}</p>
        </div>
    )
}

export default Product