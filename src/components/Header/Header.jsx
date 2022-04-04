import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc' alt='logo' />
            </div>
            <nav className='header__list'>
                <Link to="/"><span>Home</span></Link>
                <Link to="/catalog"><span>Catalog</span></Link>
                <Link to="/cart"><span>Cart</span></Link>
            </nav>
            <div></div>
        </div>
    )
}

export default Header