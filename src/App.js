import "./App.css";
import React from 'react'
import productData from './data/productData.js'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/Checkout'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      clickedItem: ''
    }
  }

  handleClick = (e) => {
    let cartItem = e.target.name + e.target.price
    console.log(cartItem)
    console.log(e.target)
  }

  render() {
    console.log(this.handleClick)

    return (
      <div>
        <h1>My Garage Sale</h1>
        <Products productData={productData} handleClick={this.handleClick} />
        <Cart />
        <Checkout />
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
