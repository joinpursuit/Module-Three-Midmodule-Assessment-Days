import React from "react";
import "./App.css";
import productData from "./data/productData";
import GarageList from "./Components/GarageList";
import Cart from "./Components/Cart";
import Form from "./Components/Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      garage: [],
    };
    this.data = productData;
  }

  sale = (product) => {
    let garage = this.state.garage;
    this.setState({ garage: garage.concat(product) });
  };

  render() {
    const { garage } = this.state;
    let subTotal = garage.reduce((a, b) => a + b.price, 0);
    let taxCalc = garage.reduce((a, b) => a + b.price, 0) * 0.05;
    let total = subTotal + taxCalc;
    return (
      <div className="Products">
        <div>
          <h1>My Garage Sale</h1>
          <GarageList products={this.data} saleProduct={this.sale} />
        </div>
        <div className="CartSide">
          <Cart
            garage={this.state.garage}
            taxCalc={taxCalc || 0}
            subTotal={subTotal || 0}
            total={total || 0}
          />
          <Form total={total || 0} />
        </div>
      </div>
    );
  }
}

export default App;
