import React, { useState, useEffect, useRef } from 'react';
import aboutImage from './assets/about.jpg';
import exploreImage from './assets/explore.jpg';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import room1Image from './assets/room-1.jpg';
import room2Image from './assets/room-2.jpg';
import room3Image from './assets/room-3.jpg';
import serviceImage from './assets/service.jpg';
import twitter from './assets/twitter.png';
import youtube from './assets/youtube.png';

import ScrollReveal from 'scrollreveal';
import './styles.css';
import Mapa from '../Mapa.tsx';
import LoginModal from '../modal/LoginModal.tsx';
import CardProductos from '../CardProductos/CardProductos.tsx';

export default function PaginaInicio() {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const menuBtnIcon = menuBtn.querySelector("i");

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };

    const handleNavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    menuBtn.addEventListener("click", handleMenuClick);
    navLinks.addEventListener("click", handleNavClick);

    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      navLinks.removeEventListener("click", handleNavClick);
    };
  }, []);

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__container p", scrollRevealOption);
    ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
  }, []);

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="#">
                <img src="#" alt="logo" />
              </a>
            </div>
            <div className="nav__menu__btn" ref={menuBtnRef}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" ref={navLinksRef}>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Acerca</a>
            </li>
            <li>
              <a href="#service">Catálogo</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn nav__btn" onClick={handleOpenModal}>
            Usuario
          </button>
        </nav>
        <div className="section__container header__container" id="home">
          <p>Simple - Único - amigable</p>
          <h1>
            Servicios de personas con discapacidad
            <br />
          </h1>
        </div>
      </header>

      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src={aboutImage} alt="about11" />
        </div>
        <div className="about__content">
          <p className="section__subheader">Acerca de Nosotros</p>
          <h2 className="section__header">
            ¡Las Mejores Vacaciones Comienzan Aquí!
          </h2>
          <p className="section__description">
            Con un enfoque en alojamientos de calidad, experiencias
            personalizadas y reservas sin complicaciones, nuestra plataforma
            está dedicada a asegurar que cada viajero comience sus vacaciones
            soñadas con confianza y emoción.
          </p>
        </div>
        <div className="about__content">
          <p className="section__subheader">Misión</p>
          <h2 className="section__header">
            ¡Las Mejores Vacaciones Comienzan Aquí!
          </h2>
          <p className="section__description">
            Con un enfoque en alojamientos de calidad, experiencias
            personalizadas y reservas sin complicaciones, nuestra plataforma
            está dedicada a asegurar que cada viajero comience sus vacaciones
            soñadas con confianza y emoción.
          </p>
          <p className="section__subheader">Visión</p>
          <h2 className="section__header">
            ¡Las Mejores Vacaciones Comienzan Aquí!
          </h2>
          <p className="section__description">
            Con un enfoque en alojamientos de calidad, experiencias
            personalizadas y reservas sin complicaciones, nuestra plataforma
            está dedicada a asegurar que cada viajero comience sus vacaciones
            soñadas con confianza y emoción.
          </p>
        </div>
        <div className="about__image">
          <img src={aboutImage} alt="about" />
        </div>
      </section>

      <section className="section__container room__container" id="service">
        <p className="section__subheader">Productos</p>
        <h2 className="section__header">Productos que manejamos.</h2>
        <div className="room__grid">
          <div className="room__card">
            <CardProductos></CardProductos>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room2Image} alt="room" />
            </div>
            <div className="room__card__details">
              <h4>Executive Cityscape Room</h4>
              <p>
                Experience urban elegance and modern comfort in the heart of the
                city.
              </p>
              <h5>
                Starting from <span>$199/night</span>
              </h5>
              <button className="btn">Conoce más</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room3Image} alt="room" />
            </div>
            <div className="room__card__details">
              <h4>Family Garden Retreat</h4>
              <p>
                Spacious and inviting, perfect for creating cherished memories
                with loved ones.
              </p>
              <h5>
                Starting from <span>$249/night</span>
              </h5>
              <button className="btn">Conoce más</button>
            </div>
          </div>
        </div>
      </section>

      <section className="explore" id="explore">
        <p className="section__subheader">Ubicación</p>
        <h2 className="section__header">Puedes encontrarnos.</h2>
        <div className="explore__bg">
          <div className="explore__content">
            <Mapa></Mapa>
          </div>
        </div>
      </section>

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

      {/* Modal de Login */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}