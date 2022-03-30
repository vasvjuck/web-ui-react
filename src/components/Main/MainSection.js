import React from 'react'
import './MainSection.css';
import SquareIcon from '@mui/icons-material/Square';
import img1 from '../../img/3.jpg'
import img2 from '../../img/4.jpg';



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
                <div className="bottom">
                    <div className="bottom__content">
                        <img src={img1} alt="" />
                        <p>Easy To Order</p>
                    </div>
                    <div className="bottom__content">
                        <img src={img2} alt="" />
                        <p>Fastest Delivery</p>
                    </div>
                    <div className="bottom__content">
                        <img src={img1} alt="" />
                        <p>Best Quality</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainSection