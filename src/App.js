
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
//import Slider from './components/Slider/Slider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/gold' element={<ShopCategory category="gold"/>}/>
        <Route path='/silver' element={<ShopCategory category="silver"/>}/>
        <Route path='/diamond' element={<ShopCategory category="diamond"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
