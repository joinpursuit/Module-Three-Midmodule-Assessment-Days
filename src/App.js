import React from 'react'
import "./App.css";
import Products from './Components/Product'
import productData from './data/productData'
import AddToCart from './Components/AddToCart'
import CheckOut from './Components/CheckOut'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      cart:[],
      subtotal: []
    }
  }


  addCart=(item)=>{
    const { cart, subtotal } = this.state;
    this.setState({
      cart:[...cart, item], subtotal: [...subtotal, item.price]
     
    })
  }
  
  render(){
    let totalSum = this.state.subtotal.reduce((acc, curr)=>{return acc + curr},0)
    const { cart } = this.state;
    
    let tax = totalSum * 0.05
    let total = tax + totalSum
  return (
    <div>
      <h3>My Garage Sale</h3>
      <Products items={productData} addCart={this.addCart} />
      <AddToCart cart={ cart } totalSum={totalSum}/>
      <CheckOut total={total.toFixed(2)}/>
      
    </div>
  )}
};

export default App;