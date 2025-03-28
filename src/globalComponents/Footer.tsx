import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../components/paginaInicio/assets/facebook.png'
import logo from '../components/paginaInicio/assets/logo.png'


import '../components/paginaInicio/styles.css';

const isMenu = window.location.pathname === '/menu'

const Footer = () => {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <div className="logo">
                            <a href="#home">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h4>Otros Servicios</h4>
                        <ul className="footer__links">
                            <li>
                                <a href={isMenu ? '/' : "#header"}>Inicio</a>
                            </li>
                            <li>
                                <a href={isMenu ? '/' : "#about"}>Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href={isMenu ? '/' : "#service"}>Nuestros Productos</a>
                            </li>
                            <li>
                                <a href={isMenu ? '/' : "#explore"}>Ubicacion</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Contáctanos</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="tel:+50495576500">+504 9557-6500</a>
                            </li>
                            <li>
                                <a href="tel:+50422366909">+504 2236-6909</a>
                            </li>
                           
                            <li>
                                <a href="mailto:patronatonacionalr@yahoo.com">patronatonacionalr@yahoo.com</a>
                            </li>
                        </ul>
                        <div className="footer__socials">
                            <Link to={"https://www.facebook.com/glen.ihri.7/"}>
                                <img src={facebook} alt="facebook" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer__bar">Copyright © 2025</div>
            </footer>
        </>
    )
}

export default Footer