import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../features/cartSlice';
import './Ice.css';
import SearchIcon from '@mui/icons-material/Search';

import StarsIcon from '@mui/icons-material/Stars';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import IceData from '../../assets/Data/Ice.json';

const Icecream = () => {
  const [product, setProduct] = useState([]);
  const [filterItems, setFilterItems] = useState([]); 
  const [search, setSearch] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);
  const[priceSort,setPricesort]=useState('default')
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
    setAddedToCart(true);
  };

  const handleDeleteCartItem = (itemId) => {
    dispatch(remove(itemId));
    setAddedToCart(false);
  };

  const { cart } = useSelector((state) => state);

  const AnythinginsideCart = (itemId) => {
    return cart.find((cartItem) => cartItem.id === itemId);
  };

  useEffect(() => {
    setProduct(IceData);
    setFilterItems(IceData);
  }, []);

  const isArray = Array.isArray(filterItems);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const result = product.filter(item => item.title.toLowerCase().includes(query));
    setFilterItems(result);
  };
  const symbolToPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const handlePriceSort = (option) => {
    setPricesort(option);
    let sortedFood = [...filterItems];

    if (option === 'lowToHigh') {
      sortedFood.sort((a, b) => symbolToPrice(a.price) - symbolToPrice(b.price));
    } else if (option === 'highToLow') {
      sortedFood.sort((a, b) => symbolToPrice(b.price) - symbolToPrice(a.price));
    } else {
      return; 
    }

    setFilterItems(sortedFood);
  };
  return (
    <div>
      <h1 className='Ice-heading'>Creamy Dreams</h1>
<div className='search_priceSort'>
      <div className='search'>
        <input type='text' value={search} onChange={handleChange} />
        <SearchIcon className='searchIcon' />
        
      </div>
      <div className='sortSelect'>
      <select onChange={(e) => handlePriceSort(e.target.value)}>
      <option value="default">Sort by Price</option>
      <option value="lowToHigh">Low to High</option>
      <option value="highToLow">High to Low</option>
    </select>
    </div>
      </div>
      <div className='card-grid'>
        {isArray && filterItems.length > 0 ? (
          filterItems.map((item) => (
            <div key={item.id} className='Ice-Cards'>
              <img src={item.image} className='image' alt={item.title} />
              <div className='info'>
                <h3 className='title'>{item.title}</h3>
                <p className='price'>{item.price}</p>
                <div className='ratingAndDeli'>
                <div className='rating'>
                  <StarsIcon className='starSymbol'/> 
                   <p>{item.rating}</p>
                   </div>
                   <div className='bikeDeli'>
                    <DeliveryDiningIcon />
                  <p> {item.time}</p> 
                 </div>
                 </div>
                {AnythinginsideCart(item.id) ? (
                  <button onClick={() => handleDeleteCartItem(item.id)} className='btn'> Remove Item </button>
                ) : (
                  <button onClick={() => handleAddToCart({ ...item, quantity: 1 })} className='btn'>Add to Cart</button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Icecream;
