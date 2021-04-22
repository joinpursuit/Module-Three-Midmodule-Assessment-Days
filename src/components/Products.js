// import React, { Component } from 'react'

//  export default class Items extends Component {
//     render() {
//         return (
//             <div>

//                 <h3>Item Name</h3>
//                 <p>Price</p>
//                 <button>Add to cart</button>
//                 <p>Picture</p>
//                 <p>Item Description</p>

//             </div>
//         )
//     }
// }

import React from "react";

const Products = (props) => {
  //   console.log(props);
  //   console.log(props.keyOfProducts[0].name);
    let product = props.keyOfProducts[0];
  //   console.log(product);

  let allProducts = props.keyOfProducts.map((eachProduct, e) => {
    return (
      <li key={props.id}>
        <h4>{eachProduct.name}</h4>
        <img src={eachProduct.img} alt={eachProduct.name} />
        <br></br>
        {eachProduct.description}
        <br></br>${eachProduct.price} <button>Add to Cart</button>
      </li>
    );
  });

  return (
    <>
      <h1>Products</h1>
      <p>{allProducts}</p>
    </>
  );
};

export default Products;
