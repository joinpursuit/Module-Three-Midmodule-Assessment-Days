import React from 'react';
import "./App.css";
import Checkout from './Components/Checkout';
import Products from './Components/Products';
import Cart from './Components/Cart';
import productData from './data/productData'


class App extends React.Component {
  constructor(){
    super()
    // make it an array because you will need the whole list of items for total price
    this.state = {
      items: []
    }
  }
//added an item prop because this is the item that I want to pass to the list of items added to cart
  addToCart = (item) =>{
    const { items } = this.state
    items.push(item)
    this.setState({
      items: items
    })
  }

  
  render(){
  const { items } = this.state
  const subTotal = items.reduce((sum, item)=> sum + item.price, 0)
  const tax = (subTotal * 0.05)
  const total = subTotal + tax
    return (
      <div>
        <Products products={productData} addToCart={this.addToCart}/>
        <Cart items={items} subTotal={subTotal} tax={tax} total={total}/> 
        <Checkout/> 
      </div>
    )
  }
};

export default App;
