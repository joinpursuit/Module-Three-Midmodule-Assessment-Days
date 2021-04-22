import "./App.css";
import productData from './data/productData'
import Products from './Components/Products'
import Checkout from './Components/Checkout'
import Cart from './Components/Cart'
import React from "react";

class App extends React.Component{
  render(){
  return (
    <div class ="App">
      <Products productData ={productData} addProduct ={this.addProduct}/>
  </div>
  )
};
}
export default App;
