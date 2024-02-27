import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className='nav_bar'>
          <li className="nav_search">
            <button htmlFor="nav_search">
              <CiSearch className='search_icon'/>
            </button>
            <input id='nav_search' type='text' placeholder='Search'/>
          </li>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </nav>
    )
}

export default Navbar;