import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import './Navbar.css';
import logo from '../../assets/images/finallogo.png'; 
import { useSelector } from 'react-redux';
import LogOut from './LogOut';


const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart)
  
  return (
    <nav className="navBar active">
      <Link to='/menu' className='logo'>
        <img src={logo} alt='Logo' />
        <h2>Tasty</h2>
      </Link>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <DehazeIcon />
      </label>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='links'>
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to='/menu' className='links'>
            <i className="fas fa-home"></i>Menu
          </Link>
        </li>
        {/* <li>
          <Link to='/about' className='links'>
            <i className="fas fa-info-circle"></i>About
          </Link>
        </li> */}
        <li>
          <Link to='/contact' className='links'>
            <i className="fas fa-envelope"></i>Contact
          </Link>
        </li>
        <li>
          <Link to='/login' className='links'>
            <i className="fas fa-envelope"></i> Login
          </Link>
        </li>
        <li>
          <Link to='/cart' className='links shoppingCart'>
            <ShoppingCartIcon /> {cartItems.length?cartItems.length:''}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
