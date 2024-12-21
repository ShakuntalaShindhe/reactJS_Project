import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from '../Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import Footer from '../Footer';

const Home = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const[person,setPerson]=useState('defaultP')
  const[date,setDate]=useState('')
  const[time,setTime]=useState('default')
  const[message,setMessage]=useState('')
  const[reserve,setReserve]=useState(false)
  const[data,setData]=useState([])
  const navigate=useNavigate()


   useEffect(() => 
    { const user = JSON.parse(localStorage.getItem('user')); 
      if (user) { 
        setName(user.name); setNumber(user.number); 
      } else { 
        alert('Sign in Before Reserving the Table');
         navigate('/login'); 
        } }, [navigate]); 
        
        const handleSubmit = (e) => { 
          e.preventDefault();
           const reserveTable = { 
            name, 
            number, 
            person, 
            date, 
            time, 
            message,
           }; 
           const storedData = JSON.parse(localStorage.getItem('ReservedTable')) || []; 
           const updatedData = [...storedData, reserveTable]; 
           localStorage.setItem('ReservedTable', JSON.stringify(updatedData)); 
           setData(updatedData); 
           setReserve(true); 
           setName(''); 
           setNumber(''); 
           setPerson('defaultP'); 
           setDate(''); 
           setTime('default'); 
           setMessage(''); 
           setTimeout(() => setReserve(false), 3000); 
           alert('Sign in before reserving the table')
           navigate('/login')
   };
  return (
    <div>
    <Carousel>
    <div className='carouselImg '>
      <img src="../src/assets/images/hero.jpg" alt="Image 1" />
      <div className="headerContainer">
      <h1>Delightful Dishes</h1>
       <h3>For the Love of Exquisite Tastes</h3>
        <p>Join us with family and relish every moment</p>
        <p>India's Most Tempting Food Awaits</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
    <div className='carouselImg'>
      <img src="../src/assets/images/banner6 (2).jpg" alt="Image 2" />
      <div className="headerContainer">
          <h1>Food Website</h1>
          <h3>For the Love of delicious food</h3>
          <p>Come with family & feel the joy of mouthwatering food</p>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
    <div className='carouselImg'>
      <img src="../src/assets/images/banner6 (1).jpg" alt="Image 3" />
      <div className="headerContainer">
           <h1>Food Paradise</h1>
            <h3>Where Every Bite is a Celebration</h3>
            <p>Bring your family and dive into a world of flavors</p>
            <p>The Ultimate Culinary Destination in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
    <div className='carouselImg'>
      <img src="../src/assets/images/banner.jpeg" alt="Image 2" />
      <div className="headerContainer">
      <h1>Gastronomic Haven</h1>
        <h3>Indulge in Culinary Bliss</h3>
        <p>Gather your loved ones and savor unforgettable flavors</p>
        <p>Experience the Finest Cuisine in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
    <div className='carouselImg'>
      <img src="../src/assets/images/img3.jpg" alt="Image 2" />
      <div className="headerContainer">
      <h1>Food Website</h1>
          <h3>For the Love of delicious food</h3>
          <p>Come with family & feel the joy of mouthwatering food</p>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
    <div className='carouselImg'>
      <img src="../src/assets/images/banner5.jpeg" alt="Image 2" />
      <div className="headerContainer">
            <h1>Food Paradise</h1>
            <h3>Where Every Bite is a Celebration</h3>
            <p>Bring your family and dive into a world of flavors</p>
            <p>The Ultimate Culinary Destination in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
    </div>
  </Carousel>
     
      <div className='ChooseUs'>
      <h3>WHY CHOOSE US</h3>
      <img src='/src/assets/images/Sspa.svg'/>
      <h1>Our Strength</h1>
      <div className='card-body'>
      <Card sx={{ maxWidth: 345,backgroundColor:'black',borderRadius:'20px' }}>
      <CardMedia 
      className='image-con'
        // sx={{style_img}}
        image="/src/assets/images/Food.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='titleCards'>
        Hygienic Food
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgb(202, 197, 197);',textAlign:'center'}}>
        Lorem Ipsum is simply dummy printing and typesetting.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345,backgroundColor:'black',borderRadius:'20px'}}>
      <CardMedia
         className='image-con'
        image="/src/assets/images/Fresh.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='titleCards'>
        Fresh Environment
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgb(202, 197, 197);',textAlign:'center' }}>
        Lorem Ipsum is simply dummy printing and typesetting.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345,backgroundColor:'black',borderRadius:'20px' }}>
      <CardMedia
         className='image-con'
        image="/src/assets/images/chefs.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='titleCards'>
        Skilled Chefs
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgb(202, 197, 197);',textAlign:'center' }}>
        Lorem Ipsum is simply dummy printing and typesetting.
        </Typography>
      </CardContent>
    </Card>
    </div>
      </div>
      <div className='mapandbookingConatiner'>
      <div className="bookingContainer">
        <h2>Online Reservation</h2>
        <p><strong>Booking request<span> +88-123-123456</span> or fill out the order form</strong></p>
        <div className='booking-info'>
          <form onSubmit={handleSubmit}>
            <div className='two'>
              <label>Name:</label>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='name-box'  required/><br></br>
              <label>Phone No:</label>
              <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <br></br>
            <div className='two'>
              <label>Persons:</label>
              <PersonIcon className='person-icon' />
              <select name='persons' id='persons' value={person} onChange={(e)=>setPerson(e.target.value)} required>
                <option value='defaultP'>Select Number of persons</option>
                <option value='1person'>1 Person</option> 
                <option value='2person'>2 Person</option>
                <option value='3person'>3 Person</option>
                <option value='4person'>4 Person</option>
                <option value='5person'>5 Person</option>
                <option value='6person'>6 Person</option>
                <option value='7person'>7 Person</option>
                <option value='8person'>8 Person</option>
              </select><br></br>
              <label>Book on:</label>
              <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} required></input>
            </div>
            <div className='two'>
              <label>Message:</label>
              <textarea id='message' name='message' rows='4' cols='45' value={message} onChange={(e)=>setMessage(e.target.value)}>
              </textarea>
              <label>Book at:</label>
              <select name='time' id='time' className='time' value={time} onChange={(e)=>setTime(e.target.value)} required>
                <option value='default'>Select Timing</option>
                <option value='8am'>8am</option>
                <option value='9am'>9am</option>
                <option value='10am'>10am</option>
                <option value='11am'>11am</option>
                <option value='12pm'>12pm</option>
                <option value='1pm'>1pm</option>
                <option value='2pm'>2pm</option>
                <option value='3pm'>3pm</option>
                <option value='4pm'>4pm</option>
                <option value='5pm'>5pm</option>
                <option value='6pm'>6pm</option>
                <option value='7pm'>7pm</option>
                <option value='8pm'>8pm</option>
                <option value='9pm'>9pm</option>
                <option value='10pm'>10pm</option>
              </select>
            </div>
            <button type='submit' className='reserveBtn'>Reserve a Table</button>
          </form>
          {reserve && <p className='success-message'>Table Reserverd SuccessFully!</p>}
        </div>
      </div>
      <div className='map-adding'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.51321570381!2d78.37575387498752!3d17.482997883420563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930012634ffb%3A0x7426380d2eb9dc8b!2sLocation!5e0!3m2!1sen!2sin!4v1732982057677!5m2!1sen!2sin" width="700" height="550" aloading="lazy">
      </iframe>
      </div>
      </div>
      <Footer />
    </div>
   
  );
}
export default Home;
