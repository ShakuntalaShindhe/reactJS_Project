import './Menu.css'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IcecreamIcon from '@mui/icons-material/Icecream';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CakeIcon from '@mui/icons-material/Cake';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
const Menu = () => {
     return (
    <div className='conatainer'>
      <h1 className='menu'>Our Hot Dishes</h1>
      <div className='dishes'>
       <Link to='/menu'><RestaurantIcon className='dish-icons' /></Link>  
       <Link to='iceCreame'><IcecreamIcon className='dish-icons'/></Link>
        <Link to='pizza'><LocalPizzaIcon  className='dish-icons'/></Link>
        <Link to='burger'><LunchDiningIcon className='dish-icons'/></Link>
        <Link to='rice'> <RiceBowlIcon className='dish-icons' /></Link>
        <Link to='cake'><CakeIcon className='dish-icons'/></Link> 
        <Link to='coffee'><CoffeeIcon  className='dish-icons'/></Link>
       <Link to='allFastFoods'><FastfoodIcon className='dish-icons' /></Link> 
      </div>
<Outlet/>
<Footer />
</div>
  )
}

export default Menu
