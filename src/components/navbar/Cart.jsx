
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, remove } from '../../features/cartSlice'
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);

  const totalPrice = products.reduce((acc, val) => {
    const price = val.price.replace('₹', '')
    const quantity = val.quantity
    return acc + (price * quantity)
  }, 0)
  console.log('Total cost of Your Cart is', totalPrice)

  const handleClick = () => {
     if (products.length === 0) {
       alert('Your cart is empty. Please add items to your cart before proceeding.'); 
       return; 
      } 
      navigate('/address'); 
    };

  return (
    <div className="cart-container">
      <h2 className='cart-heading'>Your Cart</h2>
      <div className="product-list">
        {products && products.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="product-details">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3 className='cart-title'>{product.title}</h3>
                <p>Price: ₹{(((product.price.replace('₹', ''))) * product.quantity).toFixed(2)}</p>
              </div>
            </div>
            <button onClick={() => dispatch(decreaseQuantity({ id: product.id }))} className='incrDecrBtn'>--</button>
            <button onClick={() => dispatch(remove(product.id))} className='remove-btn'>Remove</button>
            <button onClick={() => dispatch(increaseQuantity({ id: product.id }))} className='incrDecrBtn'>+</button>
          </div>
        ))}
      </div>
      <div className='last'>
        <h2 className='cart-total'> Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={() => handleClick()} className='totalbtn'>Place Order</button>
        <button onClick={() => navigate('/menu')} className='continueOrder'>Check Menu</button>
      </div>
    </div>
  );
}

export default Cart;
