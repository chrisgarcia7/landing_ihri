import React, { useRef, useEffect } from 'react';
import '../components/paginaInicio/styles.css';
import logo from '../components/paginaInicio/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = ({ handleOpenModal }) => {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;

    if (!menuBtn || !navLinks) return; // Asegúrate de que los refs no sean null

    const menuBtnIcon = menuBtn.querySelector("span"); // Cambia esto para buscar el span dentro del botón

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line"; // Cambia el className
    };

    const handleNavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.className = "ri-menu-line"; // Cambia el className
    };

    menuBtn.addEventListener("click", handleMenuClick);
    navLinks.addEventListener("click", handleNavClick);

    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      navLinks.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
      <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Acerca
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn nav__btn" onClick={handleOpenModal}>
        Usuario
      </button>

    </nav>
  );
};

export default Navbar;