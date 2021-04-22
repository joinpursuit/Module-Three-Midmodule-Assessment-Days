// import React from 'react'
import productData from './data/productData'
import Products from './data/Products'
import Checkout from './data/Checkout'
import Cart from './data/Cart'
import "./App.css";
// import formatPrice from './helpers/formatPrice'


// const App = () => {
//   return <h1>Hello, world!</h1>;
// };

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],

    }
    this.data = productData
  }

  addCart = (product) => {
    let cart = this.state.cart
    this.setState({cart: cart.concat(product)
    })
  }
  
  render() {
    let {cart} = this.state
    let subtotal = cart.reduce((a,b) => a+b.price,0)
     let tax = subtotal * 0.05
    let total = subtotal + tax


    return (
      <div className='App'>
        <div>
          <h1>My Garage Sale</h1>
          <Products
          products= {this.data}
          handleClick = {this.addCart}
          />
        </div>
        <div>
         <Cart 
          cart = {cart}
          subtotal = {subtotal}
          tax= {tax}
          total = {total}

         
         />
         <Checkout
         total={total}
         />
          {/* // cart = {cart}
          // subtotal = { subtotal || 0}
          // tax = { tax || 0 }
          // total = { total || 0 }

           ///>
           <Checkout

          {/* //  total = { total || 0}
           // /> */}

        </div>
        
      </div>
    )
  }
}
