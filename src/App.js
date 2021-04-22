import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm"
import MainListing from "./components/MainListing"

class App extends React.Component {
  render() {
    const { products } = this.props;
    const boughtProducts = products;
   
    return (
      <div class="App">
        <div className="leftSide">
        <h1>My Garage Sale</h1>
          <MainListing  
          products = {products}
          />
        </div>
        <div className="rightSide" >
          <Cart
          bought={boughtProducts}
           
          />
          <CheckoutForm
          
          />
        </div>
      </div>
    );
  }
}




export default App;