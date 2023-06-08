import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { BsFillGrid1X2Fill } from 'react-icons/bs';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMobileMenu = () =>{
        setShowMenu(!showMenu);
    }
  return (
    <div className='nav-container'>
    <header className='header'>
        <Link className="logo">
            <MdOutlineTravelExplore className='logoIcon'/>
            <span className="logoText">Travel.</span>
        </Link>
        <nav className={`${showMenu ? 'mobileMenuOnn' : 'mobileMenuOff'}`}>
            <ul>
                <li><Link className='navLink'>Home</Link></li>
                <li><Link className='navLink'>Packages</Link></li>
                <li><Link className='navLink'>Shop</Link></li>
                <li><Link className='navLink'>About</Link></li>
                <li><Link className='navLink'>Pages</Link></li>
                <li><Link className='navLink'>News</Link></li>
                <li><Link className='navLink'>Contact</Link></li>
            </ul>
            <Link className="navBtn btn">BOOK NOW</Link>
        </nav>
        <BsFillGrid1X2Fill className='navMenuIcon' onClick={handleMobileMenu}/>
    </header>
    </div>
  )
}

export default Navbar
