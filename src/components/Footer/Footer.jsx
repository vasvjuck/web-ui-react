import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
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
                            </div>
                        </div>
                        <ul className="footer__item-social">
                            <li><Link to="/#Facebook"><img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" alt="Facebook" /></Link></li>
                            <li><Link to="/#Twitter"><img src="https://img.icons8.com/color/48/000000/twitter-circled--v5.png" alt="Twitter" /></Link></li>
                            <li><Link to="/#Linkedin"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png" alt="Linkedin" /></Link></li>
                            <li><Link to="/#GooglePlus"><img src="https://img.icons8.com/color/48/000000/google-plus--v1.png" alt="GooglePlus" /></Link></li>
                        </ul >
                    </div >
                    <div className="footer__item-copy">
                        2022 HI © Copyright all rights reserved
                    </div>
                </div >

            </div >
        </footer >
    )
}

export default Footer