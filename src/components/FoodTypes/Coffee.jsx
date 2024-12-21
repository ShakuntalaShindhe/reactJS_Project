
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../features/cartSlice';
import './Ice.css';
import IceData from '../../assets/Data/coffee.json';
import StarsIcon from '@mui/icons-material/Stars';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SearchIcon from '@mui/icons-material/Search';

const Icecream = () => {
  const [product, setProduct] = useState([]);
  const [filterItems, setFilterItems] = useState([]); 
  const [search, setSearch] = useState('')
  const [addedToCart, setAddedToCart] = useState(false);
  // const[priceSort,setPriceSort]=useState('default')
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
  }, [filterItems]);

  const isArray = Array.isArray(filterItems);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    setSearch(query)
    const result = product.filter(item => item.title.toLowerCase().includes(query))
    setFilterItems(result)
  }
//   const sortToSymbol=(price)=>{
//     return parseFloat(price.replace('₹',''))
//   }
// const handlePriceSort=(option)=>{
//   setPriceSort(option)
//   let sortedFood=[...filterItems]
//   if(option==='lowToHigh')

// }

  return (
    <div><h1 className='Coffee-heading'>Coffee Shop</h1>
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
                   <p> {item.rating}</p>
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



