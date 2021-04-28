import "./App.css";
import React from 'react';
import ItemList from './Components/ItemList';
import ShoppingCart from './Components/shoppingCart';
import Checkout from './Components/checkout';
import "./App.css";


class App extends React.Component{
  state = {Cart: []}

  addItem = (item) => {
    this.setState((prevState) =>{
        return {Cart: [item, ...prevState.Cart]}
    })
  }
  render() {
    let subTotal = 0
    this.state.Cart.forEach(item => subTotal+= item.price);
    let tax = subTotal*.05

    return(
      <div className="App">
      <ItemList addItem={this.addItem} />
      <ShoppingCart cart={this.state.Cart} subTotal={subTotal} tax={tax||0} />
      <Checkout  />
      </div>
    )
  }
}

export default App;
