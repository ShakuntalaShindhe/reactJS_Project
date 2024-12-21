import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Food.css';

const Address = () => {
    const[text,setText]=useState('')
    const[number,setNumber]=useState('')
    const[housetext,setHouseText]=useState('')
    const[roadtext,setRoadText]=useState('')
    const[city,setCityText]=useState('')
    const[state,setState]=useState('')

    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate('/FoodAni')
    }
  return (
    <div className='orderAddress'>
      <form onSubmit={()=>handleSubmit()}>
        <div className='two'>
        <label>Name:</label>
        <input type='text'value={text} onChange={(e)=>setText(e.target.value)} required/>
        <label>Phone No:</label>
        <input type='number'value={number} onChange={(e)=>setNumber(e.target.value)}  required/>
        </div>
        <div className='two'>
        <label>House No:</label>
        <input type='text' value={housetext} onChange={(e)=>setHouseText(e.target.value)} required/>
        <label>Road Name/Area/Colony:</label>
        <input type='text' value={roadtext} onChange={(e)=>setRoadText(e.target.value)} required/>
        </div>
        <label>City:</label>
        <input type='text' value={city} onChange={(e)=>setCityText(e.target.value)} required/>
        <label>State:</label>
        <input type='text' value={state} onChange={(e)=>setState(e.target.value)} />
        <button type='submit' className='btnAddress'>Place Order</button>
      </form>
    </div>
  )
}

export default Address
