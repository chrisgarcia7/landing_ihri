import React, { useState } from 'react';
import Carrousel from './components/carrousel.tsx';
import NavBar from '../../globalComponents/navbar.tsx';
import Footer from '../../globalComponents/Footer.tsx'
import '../paginaInicio/styles.css'
const Menu = () => {

  const [openModal, setOpenModal] = useState(false);

  const setModal = () => {
    setOpenModal(true);
  }

  return (
    <>
      <NavBar handleOpenModal={setModal}></NavBar>
      <Carrousel></Carrousel>
      <Footer></Footer>
    </>

  )
}

export default Menu
