import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc' alt='' />
            </div>
            <nan className='header__list'>
                <a><span>Home</span></a>
                <a><span>Catalog</span></a>
                <a><span>Cart</span></a>
            </nan>
            <div></div>
        </div>
    )
}

export default Header