import React from 'react'
import facebook from '../components/paginaInicio/assets/facebook.png'
import instagram from '../components/paginaInicio/assets/instagram.png';
import twitter from '../components/paginaInicio/assets/twitter.png';
import youtube from '../components/paginaInicio/assets/youtube.png';

import '../components/paginaInicio/styles.css';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <div className="logo">
                            <a href="#home">
                                <img src="#" alt="logo" />
                            </a>
                        </div>
                        <p className="section__description">
                            Discover a world of comfort, luxury, and adventure as you explore
                            our curated selection of hotels, making every moment of your
                            getaway truly extraordinary.
                        </p>
                        <button className="btn">Book Now</button>
                    </div>
                    <div className="footer__col">
                        <h4>Otros Servicios</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#">Concierge Assistance</a>
                            </li>
                            <li>
                                <a href="#">Flexible Booking Options</a>
                            </li>
                            <li>
                                <a href="#">Airport Transfers</a>
                            </li>
                            <li>
                                <a href="#">Wellness & Recreation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Contáctanos</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#">####</a>
                            </li>
                        </ul>
                        <div className="footer__socials">
                            <a href="#">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#">
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bar">Copyright © 2025</div>
            </footer>
        </>
    )
}

export default Footer