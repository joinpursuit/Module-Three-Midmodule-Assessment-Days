import "./App.css";
import productData from './data/productData'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
    }
    this.data = productData
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart = (newItem) => {
    this.setState({
      items: [...this.state.items, newItem],

    })
  }


  render() {
    const chosenProducts = this.state.items
    const subTotal = chosenProducts.reduce((a, b)=> a+b.price, 0)
    const tax = subTotal * 0.05
    const realTotal = subTotal + tax

    return (
      <div className='App'>
        <div >
          <h1>My Garage Sale</h1>
          <Products productData={this.data} handleClick={this.addToCart}/>
        </div>
        <div>
          <Cart  chosenProducts={chosenProducts} subTotal={subTotal} tax={tax} realTotal={realTotal}/>
          <Checkout  chosenProducts={chosenProducts} subTotal={subTotal} tax={tax} realTotal={realTotal}/>
        </div>
      </div>
    );
  }
}

export default App

