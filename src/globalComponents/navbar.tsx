
import React, {useRef, useEffect} from 'react'
import '../components/paginaInicio/styles.css';


const Navbar = ({handleOpenModal}) => {
const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);
 

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


  return (
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
        <a className='links' href="#home">Inicio</a>
      </li>
      <li className='links'>
        <a href="#about">Acerca</a>
      </li>
      <li className='links'>
        <a href="#service">Catálogo</a>
      </li>
      <li className='links'>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <button className="btn nav__btn" onClick={handleOpenModal}>
      Usuario
    </button>
  </nav>
  )
}

export default Navbar