import React from 'react';
import "./App.css";
import Header from "./components/Header";
import productData from "./data/productData";
import SalesItems from "./components/SalesItems";
import Cart from "./components/Cart"
import Form from "./components/Form"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      forSale: []
  };

    this.data = productData;

 }

 purchase = (item) => {
   const {forSale} = this.state;
   this.setState(
     { forSale: forSale.concat(item)}
     )
 }

 render() {
  const { forSale } = this.state;
  let sub = forSale.reduce((num, num2) => num + num2.price, 0);
  let tax = forSale.reduce((num, num2) => num + num2.price, 0) * 0.05;
  let total = sub + tax;
   return (
   <>
   <Header />
   <SalesItems items={this.data} itemUp={this.purchase} />
   <Cart purchase={forSale} tax = {tax || 0} sub = {sub || 0} total = {total || 0}/>
   <Form total={total || 0} />
   </>
   )

 }

}

export default App;
