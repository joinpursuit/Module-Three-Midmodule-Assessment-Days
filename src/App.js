import "./App.css";
import React from 'react'
import ItemList from './Components/ItemList'
import shoppingCart from './Components/shoppingCart'
import formatPrice from './helpers/formatPrice'

class App extends React.Component{
  state = {Cart: []}

  addItem = (item) => {
    this.setState((prevState) =>{
        return {Cart: [item, ...prevState.Cart]}
    })
  }
  render() {
    // const { cart } = this.state;
    let subTotal = 0
    // this.state.Cart.forEach(item => subTotal+= item.price);

    return(
      <div className="App">
      <ItemList addItem={this.addItem}/>
      <shoppingCart cart={this.state.boo} subTotal={formatPrice(subTotal)} />
      </div>
    )
  }
}

export default App;
