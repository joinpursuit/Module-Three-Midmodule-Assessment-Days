import "./App.css";
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';

const App = () => {
  return (
    <>
      <ProductList />
      <Cart />
      <Checkout />
    </>
  )
};

export default App;
