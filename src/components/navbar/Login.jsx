import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, number, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Login successful!');
    navigate('/contact');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='namePhone'>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='namePhone'>
          <label>Phone:</label>
          <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} required />
        </div>
        <div className='namePhone'>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='namePhone'>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
