import { Link , NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
   <header>
    <nav className='navigation'>
      <NavLink to='/' className='link'>Home</NavLink>
      <NavLink to='/cart' className='link'>Cart</NavLink>

    </nav>
    <Link className="items" to='/cart'>
      <span>Count : 2</span>
    </Link>
   </header>
  )
}
