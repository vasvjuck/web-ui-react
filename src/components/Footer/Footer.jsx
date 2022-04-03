import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">

                    <div className="footer__items">
                        <div className="footer__item-contacts">
                            <div className="footer__stuff">
                                <h4>Branding stuff</h4>
                                <div className="food__stuff-inner">
                                    <div>
                                        <p>
                                            Our job is to filling your tummy with
                                            delicious food and with fast and free delivery.
                                        </p>

                                    </div>
                                    {/* <ul className="footer__branding-stuff">
                                        <li><a href="#">Burger</a></li>
                                        <li><a href="#">Pizza</a></li>
                                        <li><a href="#">Tacco</a></li>
                                    </ul> */}
                                </div>
                            </div>
                            <ul className="footer__item-social">
                                <li><a><img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" alt="Facebook" /></a></li>
                                <li><a><img src="https://img.icons8.com/color/48/000000/twitter-circled--v5.png" alt="Twitter" /></a></li>
                                <li><a><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png" alt="Linkedin" /></a></li>
                                <li><a><img src="https://img.icons8.com/color/48/000000/google-plus--v1.png" alt="GooglePlus" /></a></li>
                            </ul >
                        </div >
                        <div className="footer__item-copy">
                            2022 HI © Copyright all rights reserved
                        </div>
                    </div >

                </div >
            </footer >
        </div >
    )
}

export default Footer