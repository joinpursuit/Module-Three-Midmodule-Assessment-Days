import "./App.css";
import Products from "./Components/Products.js"
import Cart from "./Components/Cart.js"
import Checkout from "./Components/Checkout.js"
import ProductData from "./data/productData"

const App = () => {
  return (
    <div className="app">
      <div className="leftSide">
        <Products ProductData={ProductData}/>
      </div>
      <div className="rightSide">
        <Cart />
        <Checkout />
      </div>
    </div>
  );
};

export default App;
