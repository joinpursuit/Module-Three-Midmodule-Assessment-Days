import "./App.css";
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';
import productData from './data/productData.js';

const App = () => {
console.log('app here',productData)  
  return (
    <>
      <ProductList />
      <Cart />
      <Checkout />
    </>
  )
};

export default App;
