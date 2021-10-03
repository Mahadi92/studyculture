import React from 'react';
import logo from '../images/studyculture.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 h-100">
                        <img src={logo} className="footerLogo" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde laboriosam asperiores maiores doloribus a beatae.
                        </p>
                    </div>
                    <div className="col-md-4 h-100 center footer-items">
                        <ul>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Address</li>
                        </ul>
                        <ul>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    <div className="col-md-4 h-100 d-flex flex-column align-items-end">
                        <ul className="footer-ico h-100 center">
                            <li>
                                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="" />
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="" />
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="" />
                            </li>
                        </ul>
                        <p className="text-center">Comilla Cotbari, Comilla <br /> 14/5 road Dokkhin Canggini</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;