import React from "react";
import ItemList from "./Component/ItemList";
import CheckOut from "./Component/CheckOut";
import Cart from "./Component/Cart"



class App extends React.Component {
   state ={cart:[], subtotal:[0]}


 addCart = (item) => {
   this.setState((prevState) => {
    this.subtotal(item.price)
     return {cart:[item, ...prevState.cart]}
   })
 }
 subtotal = (tot) => {
   this.setState((prevState)=>{
     return {subtotal: [tot, ...prevState.subtotal]}
   })
   
 }
  render() {
    console.log(this.state.subtotal)
    return (
      <div className="Main">
        My Garage Sale
        <ItemList addCart={this.addCart}/>
        <Cart  cart={this.state.cart} subtotal={this.state.subtotal}/>
        <CheckOut />
      </div>
    );
  }
}

export default App;