import { Component } from 'react';
import ProductData from './data/productData';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
    };
  };

  addToCart = (product) => {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product]
    });
  };

  render() {
    const { cart } = this.state;
    const subTotal = cart.reduce((sum, item) => sum + item.price, 0)
    const tax = subTotal * 0.05
    const total = subTotal + tax

    return (
      <div className='App'>
        <Products 
          products={ProductData}
          addToCart={this.addToCart}
        />
        <Cart 
          cart={cart}
          subTotal={subTotal}
          tax={tax}
          total={total}
        />
        <Checkout
          total={total}
        />
      </div>
    );
  };
};

