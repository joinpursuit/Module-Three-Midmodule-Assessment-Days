import React from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import productData from './data/productData'
import formatPrice from './helpers/formatPrice'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      purchased: [],
      total: []
    }
    this.addTocart = this.addTocart.bind(this)
  }

  addTocart (prodName, price) {
    const newProduct = { prodName, price }
    this.setState({
      purchased: [...this.state.purchased, newProduct]
    })
  }

  render () {
    const allProducts = productData
    const dollarPrice = formatPrice
    const purchased = this.state.purchased
    const pay = payMe(purchased)

    return (
      <div className='App'>
        <h1>My Garage Sale</h1>
        <section className='Products'>
          <Products
            allProducts={allProducts}
            dollarPrice={dollarPrice}
            addToCart={this.addTocart}
          />
        </section>
        <section className='Rigth'>
          <Cart
            purchased={purchased}
            dollarPrice={dollarPrice}
            payStore={pay}
          />
          <CheckOut payStore={pay} dollarPrice={dollarPrice} />
        </section>
      </div>
    )
  }
}
const payMe = prods => {
  let total = []
  let subtotal = prods.reduce((acc, prod) => {
    acc += prod.price
    return acc
  }, 0)
  total.push(subtotal)
  let tax = subtotal * 0.05
  total.push(tax)
  total.push(subtotal + tax)
  return total
}
export default App
