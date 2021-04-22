import React from 'react';
import "./App.css";
import ProductData from './data/productData';
import Products from './Components/Products';
import AddToCart from './Components/AddToCart';
import Checkout from './Components/Checkout';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      subtotal: '',
      tax: '',
      total: ''
    };
  };

  addProduct = (id) => {
    ProductData.map((product, i) => {
      if(id === product.id) {
        this.state.cart.push({product})
      }
    });
    this.setState({
      cart: this.state.cart
    })
  };

  subTotal = () => {
    let initial = 0
    this.state.cart.forEach(product => product.price + initial)
    this.setState({
      subTotal: initial
    })
  };

  productTax = () => {
    this.setState({
      subTotal: this.state.subtotal * 0.05
    })
  }

  total = () => {
    this.setState({
      total: this.state.subtotal + this.state.tax
    })
  }

  render() {
    const { cart, subtotal, tax, total } = this.state

    return (
      <div className='app'>
        <section className='products-container'>
          <Products 
            products={ProductData} 
            addProduct={this.addProduct}
          />
        </section>
        <section className='cart-container'>
          <AddToCart 
            cart={cart}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
        </section>
        <section className='checkout-container'>
          <Checkout />
        </section>
      </div>
    );
  };
};

export default App;
