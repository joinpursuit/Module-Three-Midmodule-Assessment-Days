import React from 'react'
import "./App.css";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Product from "./components/Product"
import Products from "./components/Products"
import productData from './data/productData';

function App() {
  return (
    <div> 
      <h2>My Garage Sale</h2>

<div className="grid-container">
  <div className="item1">1</div>
  <div className="item2">2</div>
  <div className="item3">3</div>  
  <div className="item4">4</div>
  <div className="item5">5</div>
  <div className="item6">6</div>
</div>

      <Cart />
      <Checkout />
      <Product />
      <Products keyOfProducts = { productData }/>
    </div>

  );
}


export default App;
