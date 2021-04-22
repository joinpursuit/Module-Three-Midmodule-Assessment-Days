import "./App.css";
import productData from "./data/productData"
import React, { Component } from 'react'
import Products from "./components/Products"
import ProductCard from "./components/ProductCard";

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    const {students} = this.props
    return (
      <div className="Products">
        <h3>My Garage Sale</h3>
        
        <ProductCard
        students = {students}
         saleItems={productData}
         />

        
        
      </div>
    )
  }
}

