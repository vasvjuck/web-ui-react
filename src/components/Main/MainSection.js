import React from 'react'
import './MainSection.css';
import SquareIcon from '@mui/icons-material/Square';
import Items from '../Items/Items';

const MainSection = () => {
    return (
        <main>
            <div className="main_top">
                <SquareIcon classname="one" />
                <div className="top_text">
                    <h3 className="top__subtitle">
                        What We Serve
                    </h3>
                    <h2 className="top_title">
                        Your Favourite Food Delivery Partner
                    </h2>
                </div>
                <SquareIcon classname="two" />
            </div>
            <div className="main_bottom">
                <Items
                    img="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                    name="Burger"
                    price="75.3"
                />
                <Items
                    img="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5"
                    name="Pizza"
                    price="75.3"
                />
                <Items
                    img="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f"
                    name="Tacco"
                    price="75.3"
                />
            </div>
            <button className='btn'>View More...</button>
        </main>
    )
}

export default MainSection