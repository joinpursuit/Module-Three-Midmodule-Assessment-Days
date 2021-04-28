import "./App.css";
import "./components/Products.css"
import productData from "./data/productData"
import React, { Component } from 'react'
import Products from "./components/Products"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    const {products} = this.props
    return (
      <div className="Products">
        <Products products={productData} />

      </div>
    )
  }
}

