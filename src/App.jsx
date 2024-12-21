import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/navbar/About';
import Home from './components/navbar/Home';
import Contact from './components/navbar/Contact';
import Cart from './components/navbar/Cart';
import Menu from './components/navbar/Menu';
import IceCreame from './components/FoodTypes/IceCreame';
import Pizza from './components/FoodTypes/Pizza';
import Rice from './components/FoodTypes/Rice';
import Cakes from './components/FoodTypes/Cakes';
import Coffee from './components/FoodTypes/Coffee';
import SoftDrinks from './components/FoodTypes/SoftDrinks';
import Burgers from './components/FoodTypes/Burgers';
import FastFood from './components/FoodTypes/FastFood';
import Login from './components/navbar/Login';
import FoodMenu from './components/FoodTypes/FoodMenu';
import Carousel from './components/Carousel/Carousel';
import FoodDeliAnie from './components/FoodDeliAnie';
import Address from './components/Address';
import LogOut from './components/navbar/LogOut';

function App() {
  const location=useLocation()
  const showNavbar=!["/FoodAni"].includes(location.pathname)
  return (
    <div className="App">
       {showNavbar?(<Navbar />):(
        <p></p>
       ) }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} >
          <Route index element={<FoodMenu />} />
          <Route path='iceCreame' element={<IceCreame />} />
          <Route path='pizza' element={<Pizza />} />
          <Route path='rice' element={<Rice />} />
          <Route path='cake' element={<Cakes />} />
          <Route path='coffee' element={<Coffee />} />
          <Route path='softdrinks' element={<SoftDrinks />} />
          <Route path='burger' element={<Burgers />} />
          <Route path='allFastFoods' element={<FastFood />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/FoodAni' element={<FoodDeliAnie />} />
        <Route path='/address' element={<Address />} />
      </Routes>
      <Carousel>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
        
    </div>
  );
}

export default App;
