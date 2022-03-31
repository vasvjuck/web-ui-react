import React from 'react'
import './MainSection.css';
import SquareIcon from '@mui/icons-material/Square';

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
                <div className="bottom_content">
                    <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2' alt='burger' />
                    <div className="bottom_text">
                        <p>Burger</p>
                        <p><span>$</span>75.3</p>
                        <button href="">Order now</button>
                    </div>
                </div>
                <div className="bottom_content">
                    <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5' alt='pizza' />
                    <div className="bottom_text">
                        <p>Pizza</p>
                        <p><span>$</span>75.3</p>
                        <button href="">Order now</button>
                    </div>
                </div>
                <div className="bottom_content">
                    <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f' alt='tacco' />
                    <div className="bottom_text">
                        <p>Tacco</p>
                        <p><span>$</span>75.3</p>
                        <button href="">Order now</button>
                    </div>
                </div>
            </div>
            <button className='btn'>View More...</button>
        </main>
    )
}

export default MainSection