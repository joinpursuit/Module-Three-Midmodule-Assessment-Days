import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm"
import MainListing from "./components/MainListing"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      purchasedCart: [] ,
    }
  }


  addToCart = (product) => {
    let purchasedCart = this.state.purchasedCart
    this.setState({purchasedCart: purchasedCart.concat(product)})
  }
 


  render() {
    const {purchasedCart} = this.state
    console.log(purchasedCart)
    const subtotal = purchasedCart.reduce((a,b) => a + b.price, 0)
    const tax = subtotal * 0.05
    const total = subtotal + tax
    const { products } = this.props; // this is our data
    const boughtProducts = products;
   
    return (
      <div class="App">
        <div className="leftSide">
        <h1>My Garage Sale</h1>
          <MainListing  
          products = {products}
          addToCart = {this.addToCart}
          />
        </div>
        <div className ="right_column" >
          <Cart
          bought={boughtProducts}
          purchasedCart = {purchasedCart}
          tax = {tax}
          total = {total}
          subtotal = {subtotal}
          />
        <CheckoutForm
        total = {total}
        />
        </div>
      </div>
    );
  }
}




export default App;