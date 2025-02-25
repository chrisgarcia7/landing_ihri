import React, {  useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import room2Image from './assets/room-2.jpg';
import room3Image from './assets/room-3.jpg';
import instalacion1 from './assets/instalacion1.jpg'
import instalacion6 from './assets/instalacion6.jpg'


import producto1 from './assets/producto1.jpg'
import producto2 from './assets/producto2.jpg'
import producto3 from './assets/producto3.jpg'
import producto4 from './assets/producto4.jpg';
import producto5 from './assets/producto5.jpg';
import producto6 from './assets/producto6.jpg';
import producto7 from './assets/producto7.jpg';
import producto8 from './assets/producto8.jpg';
import producto9 from './assets/producto9.jpg';
import producto10 from './assets/producto10.jpg';
import producto11 from './assets/producto11.jpg';
import producto12 from './assets/producto12.jpg';
import producto13 from './assets/producto13.jpg';
import producto14 from './assets/producto14.jpg';
import producto15 from './assets/producto15.jpg';
import producto16 from './assets/producto16.jpg';
import producto17 from './assets/producto17.jpg';
import producto18 from './assets/producto18.jpg';
import producto19 from './assets/producto19.jpg';
import producto20 from './assets/producto20.jpg';
import producto21 from './assets/producto21.jpg';
import producto22 from './assets/producto22.jpg';
import producto23 from './assets/producto23.jpg';
import producto24 from './assets/producto24.jpg';
import producto25 from './assets/producto25.jpg';
import producto26 from './assets/producto26.jpg';
import producto27 from './assets/producto27.jpg';
import producto28 from './assets/producto28.jpg';
import producto29 from './assets/producto29.jpg';
import producto30 from './assets/producto30.jpg';
import producto31 from './assets/producto31.jpg';
import producto32 from './assets/producto32.jpg';
import producto33 from './assets/producto33.jpg';
import producto34 from './assets/producto34.jpg';
import producto35 from './assets/producto35.jpg';
import producto36 from './assets/producto36.jpg';
import producto37 from './assets/producto37.jpg';
import producto38 from './assets/producto38.jpg';
import producto39 from './assets/producto39.jpg';
import producto40 from './assets/producto40.jpg';
import producto41 from './assets/producto41.jpg';
import producto42 from './assets/producto42.jpg';

import './styles.css';

import Mapa from '../paginaInicio/components/Mapa.tsx';
import LoginModal from '../modal/LoginModal.tsx';
import CardProductos from '../CardProductos/CardProductos.tsx';
import Navbar from '../../globalComponents/navbar.tsx';
import Footer from '../../globalComponents/Footer.tsx';
import { Producto } from '../../Modelos/producto.ts';

export default function PaginaInicio() {

  const[productos, setProductos]= useState<Producto[]>([
    {
      idProducto:1,
      imagen: [producto1, producto2, producto3],
      titulo: 'Zapatos que se le  colocado Alza por acortamiento en miembro inferior',
      subtitulo: ''
    },
    {
      idProducto:2,
      imagen: [producto4, producto5, producto6,producto7, producto8, producto9],
      titulo: 'Zapatos  elaborados en el IHRI que llevan Alza por acortamiento en miembro inferior ',
      subtitulo:''
    },
    {
      idProducto:3,
      imagen: [producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21],
      titulo: 'Zapator ortopedicos para : pie plano, pie equinovaro, pie con secuelas de poliomielitis entre otros',
      subtitulo: ''
    },
    {
      idProducto:4,
      imagen: [producto22, producto23, producto24, producto25, producto26],
      titulo: 'Zapatos Comerciales ',
      subtitulo: ''
    },
    {
      idProducto:5,
      imagen: [producto27, producto28, producto29, producto30, producto31, producto32],
      titulo: 'Plantillas Ortopédicas',
      subtitulo:''
    },
    {
      idProducto:6,
      imagen: [producto33],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'H-KAFO'
    },
    {
      idProducto:7,
      imagen: [producto34],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Prótesis Transtibial  '
    },
    {
      idProducto:8,
      imagen: [producto35],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Prótesis Transfemoral'

    },
    {
      idProducto:9,
      imagen: [producto36],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie Parcial '

    },
    {
      idProducto:10,
      imagen: [producto37],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie fijo sach'
    },
    {
      idProducto:11,
      imagen: [producto38],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Pie Articulado '
    },
    {
      idProducto:12,
      imagen: [producto39, producto40],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'AFO'
    },
    {
      idProducto:13,
      imagen: [producto41],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Faja para prótesis transtibial de cuero'
    },
    {
      idProducto:14,
      imagen: [producto42],
      titulo: 'Productos del Área de Ortesis y  prótesis ',
      subtitulo: 'Barra Dennis Brown '
    }

  ])
  
   const [isModalOpen, setIsModalOpen] = useState(false); 
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


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
    <div className='main-content'>
      <header className="header">
       <Navbar handleOpenModal={handleOpenModal}></Navbar>
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
          <img src={instalacion1} alt="about11" />
        </div>
        <div className="about__content">
          <p className="section__subheader">Acerca de Nosotros</p>
          <h2 className="section__header">
          Nuestra Historia: Un Compromiso con la Rehabilitación
          </h2>
          <p className="section__description">
          El Patronato Nacional de Rehabilitación para el Inválido, con sede en Tegucigalpa, Honduras, es una institución emblemática fundada el 2 de abril de 1962, dedicada a la noble tarea de apoyar a personas con discapacidades físicas. Desde su creación, ha sido un pilar fundamental en la provisión de zapatos ortopédicos y prótesis, mejorando significativamente la calidad de vida de sus beneficiarios. A lo largo de los años, el Patronato ha evolucionado para adaptarse a las necesidades cambiantes de la comunidad a la que sirve, manteniendo siempre su compromiso con la excelencia y la innovación en el campo de la rehabilitación física. Su historia es un testimonio de la resiliencia y la dedicación, reflejando el espíritu de servicio y la solidaridad que caracteriza a la sociedad hondureña.
          </p>
        </div>
        <div className="about__content">
          <p className="section__subheader">Misión</p>
          <h2 className="section__header">
          Comprometidos con la Inclusión y la Rehabilitación
          </h2>
          <p className="section__description">
          Somos una institución sin fines de lucro en el campo de la rehabilitación
          integral para las personas con discapacidad física ofreciéndole servicios y productos para mejorar su proceso de rehabilitación.
          </p>
          <p className="section__subheader">Visión</p>
          <h2 className="section__header">
          Liderando el Camino hacia una Rehabilitación Accesible y Equitativa
          </h2>
          <p className="section__description">
          Ser una institución de rehabilitación integral física ofreciendo servicios y productos de alta calidad accesibles equitativos y centrados mediante la necesidad de cada persona con discapacidad
          </p>
        </div>
        <div className="about__image">
          <img src={instalacion6} alt="about" />
        </div>
      </section>

      <section className="section__container room__container" id="service">
        <p className="section__subheader">Productos</p>
        <h2 className="section__header">Productos que manejamos.</h2>
        <div className="room__grid">
        {productos.map((producto) => (
            <CardProductos key={producto.idProducto} producto={producto} />
          ))}
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

    <Footer></Footer>

      {/* Modal de Login */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}