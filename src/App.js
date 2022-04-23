import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetail  from './components/ProductDetail';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/products" element= {<Product/>}/>
        <Route exact path="/products/:id" element= {<ProductDetail/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/checkout" element= {<Checkout/>}/>
        <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Header/>
    </>
  );
}

export default App;
