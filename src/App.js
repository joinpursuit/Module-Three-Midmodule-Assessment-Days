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
      fname: '',
      lname: '',
      email: '',
      creditCard: '',
      zipCode: '',

    }
    this.subtotal = 0
    this.tax = 0
    this.total = 0
  }

  allFieldsValid = () => {
    const {cartItems, fname, lname, email, creditCard, zipCode} = this.state
    return fname && lname && email && creditCard.length === 16 && zipCode.length === 5
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.allFieldsValid()) {
      alert(`Yay! Purchase complete! You will be charged $${this.total.toFixed(2)}`)
    }
    else if (this.state.creditCard.length != 16) {
      alert("Credit card number is not valid")
    }
    else if (this.state.zipCode.length != 5) {
      alert("Zip code is not valid")
    }
    else {
      alert("Input is not valid")
    }
  }
  handleFname = (e) => {
    const firstName = e.target.value
    this.setState({
        fname: firstName
    })
    console.log(firstName)
  }
  handleLname = (e) => {
    const lastName = e.target.value
    this.setState({
      lname: lastName
    })
  }
  handleEmail = (e) => {
    const eMail = e.target.value
    this.setState({
      email: eMail
    })
  }
  handleZipCode = (e) => {
    const zipcode = e.target.value
    this.setState({
      zipCode: zipcode
    })
  }
  handleCreditCard = (e) => {
    const creditcard = e.target.value
    this.setState({
      creditCard: creditcard
    })
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
    console.log(this.state.zipCode.length, this.state.creditCard.length)

    return (
      <div className='App'>
        <section className="left">
          <h1>My Garage Sale</h1>
          <Products productData={productData} handleClick={this.handleClick} />
        </section>
        <section className="right">
          <Cart cartItems={this.state.cartItems} subTotal={this.subtotal.toFixed(2)} tax={this.tax.toFixed(2)} total={this.total.toFixed(2)}/>
          <Checkout handleSubmit={this.handleSubmit} allFieldsValid={this.allFieldsValid} handleFname={this.handleFname} 
          handleLname={this.handleLname} handleEmail={this.handleEmail} handleCreditCard={this.handleCreditCard} handleZipCode={this.handleZipCode} />
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
