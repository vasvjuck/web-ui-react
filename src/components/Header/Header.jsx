import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img className='logo' src='https://pngimg.com/uploads/barbecue/barbecue_PNG8.png' alt='logo' />
            </div>
            <nav className='header__list'>
                <NavLink to="/"><span>Home</span></NavLink>
                <NavLink to="/catalog"><span>Catalog</span></NavLink>
                <NavLink to="/cart"><span>Cart</span></NavLink>
            </nav>
        </div>
    )
}

export default Header