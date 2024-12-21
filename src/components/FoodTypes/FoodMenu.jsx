import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../features/cartSlice';
import AllData from '../../assets/Data/data.json';
import StarsIcon from '@mui/icons-material/Stars';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SearchIcon from '@mui/icons-material/Search';

export default function FoodMenu() {
  const [product, setProduct] = useState([]);
  const [filteritems, setFilterItems] = useState([]);
  const [search, setSearch] = useState('');
  const [addedtocart, setAddedtoCart] = useState(false);
  const [priceSort, setPricesort] = useState('default');
  
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = (item) => {
    dispatch(add(item));
    setAddedtoCart(true);
  };

  const handleDeleteCartItem = (itemId) => {
    dispatch(remove(itemId));
    setAddedtoCart(false);
  };

  const AnythinginsideCart = (itemId) => {
    localStorage.setItem('CartDetails',cart)
    return cart.some(cartItem => cartItem.id === itemId);
  };

  useEffect(() => {
    setProduct(AllData);
    setFilterItems(AllData);
  }, []);

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
    let sortedFood = [...filteritems];

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
      <div className='search_priceSort'>
        <div className='search'>
          <input type='text' value={search} onChange={handleChange} />
          <SearchIcon className='searchIcon' />
        </div>
        <div className='sortSelect'>
          <select onChange={(e) => handlePriceSort(e.target.value)}>
            <option value='default'>Sort by Price</option>
            <option value='lowToHigh'>Low to High</option>
            <option value='highToLow'>High to Low</option>
          </select>
        </div>
      </div>
      <div className='card-grid'>
        {filteritems.length > 0 ? (
          filteritems.map((item) => (
            <div key={item.id} className='card'>
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
                  <button onClick={() => handleDeleteCartItem(item.id)} className='btn'>Remove Item</button>
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
}
