import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Auth & User
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Home from './components/Home';
import AboutUs from "./components/AboutUs.jsx";



// Cart & Orders
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';

// Products
import Computers from './components/products/Computers';
import Mobiles from './components/products/Mobiles';
import Laptops from './components/products/Laptops';
import Pendrives from './components/products/Pendrives';
import Keyboards from './components/products/Keyboards';
import Headphones from './components/products/Headphones';
import Monitors from './components/products/Monitors';
import Webcams from './components/products/Webcams';
import Chargers from './components/products/Chargers';
import Food from './components/products/Food';
import Travel from './components/products/Travel';
import Clothes from './components/products/Clothes';

// Other pages
import ProductPage from './components/ProductPage';
import SearchPage from './components/SearchPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/ecommerce">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AboutUs />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* Product Categories */}
          <Route path="computers" element={<Computers />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="pendrives" element={<Pendrives />} />
          <Route path="keyboards" element={<Keyboards />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="monitors" element={<Monitors />} />
          <Route path="webcams" element={<Webcams />} />
          <Route path="chargers" element={<Chargers />} />
          <Route path="food" element={<Food />} />
          <Route path="travel" element={<Travel />} />
          <Route path="clothes" element={<Clothes />} />

          {/* Other Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
