import "./App.css";
import React from 'react'
import productData from './data/productData.js'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import formatPrice from './helpers/formatPrice'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      cartItems: [],
    }
    this.subtotal = 0
    this.tax = 0
    this.total = 0
  }

  handleClick = (name, price) => { 
    this.setState({
      cartItems: this.state.cartItems.concat({name, price}),
    })
    this.subtotal = this.subtotal + price
    this.tax = this.subtotal * .05
    this.total = this.tax + this.subtotal

  } // Because we can calculate subTotal based on other things that live inside of state, it doesn't belong in state


  render() {
    console.log(this.state.cartItems)

    return (
      <div className='App'>
        <section className="left">
          <h1>My Garage Sale</h1>
          <Products productData={productData} handleClick={this.handleClick} />
        </section>
        <section className="right">
          <Cart cartItems={this.state.cartItems} subTotal={this.subtotal.toFixed(2)} tax={this.tax.toFixed(2)} total={this.total.toFixed(2)}/>
          <Checkout />
        </section>
      </div>
    )
  }

};

export default App;

// I can see sections with products, shopping cart, and checkout form
// I can see each product's name, price, photo description, and an 'Add To Cart' button
// I can add products to my cart and see the subtotal, tax, and total update
// I can submit the checkout form, complete my purchase, and see confirmation alert with total cost
// If I do not comoplete the checkout form with valid data, I will see an alert that tells me my data is not valid
