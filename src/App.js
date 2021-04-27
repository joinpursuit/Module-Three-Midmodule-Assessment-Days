import "./App.css";
import productData from './data/productData'
import Products from './Components/Products'
import Checkout from './Components/Checkout'
import Cart from './Components/Cart'
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      cart : [],
      subtotal: 0,
      tax: 0,
      total: 0
    }
    this.addProduct =this.addProduct.bind(this)
  }
  addProduct(product){
    this.setState(currentState =>{
      if(currentState.cart.indexOf(product) === -1) {
        currentState.cart.push(product)
      }
      currentState.subtotal = 0;
      currentState.cart.forEach(product => {
      currentState.subtotal = currentState.subtotal + product.price;
      currentState.tax = currentState.subtotal * 0.05
      currentState.total = currentState.subtotal + currentState.tax;
      })
      return currentState
    })
  }
    
  render(){
  return (
    <div className ="grid -container">
      <Products productData ={productData} addProduct ={this.addProduct}/>
      <div>
        <Cart 
        cart ={this.state.cart}
        total ={this.state.total}
        tax ={this.state.tax}
        subtotal ={this.state.subtotal} />
      <Checkout total ={this.state.total} />
      </div>
  </div>
  )
};
}
export default App;
