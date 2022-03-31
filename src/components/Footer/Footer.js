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
                                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Et accusamus corporis, animi sint ad at molestias eveniet doloribus similique possimus?
                                    Perferendis voluptate ut odit vitae quia iste excepturi autem ipsam!
                                </div>
                            </div>
                            <div className="footer__logo">
                                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc' alt='logo' />
                            </div>
                            <ul className="footer__item-social">
                                <li><a><img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" alt="Facebook"/></a></li>
                                <li><a>
                                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v5.png" alt="Twitter" /></a></li>
                                <li><a><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png" alt="Linkedin" /></a></li>
                                <li><a><img src="https://img.icons8.com/color/48/000000/google-plus--v1.png" alt="GooglePlus" /></a></li>
                            </ul>
                        </div>
                        <div className="footer__item-copy">
                            2022 HI © Copyright all rights reserved
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer