import React, { useState } from 'react';
import Carrousel from './components/carrousel.tsx';
import NavBar from '../../globalComponents/navbar.tsx';
import Footer from '../../globalComponents/Footer.tsx'
import '../paginaInicio/styles.css'
import LoginModal from "../modal/LoginModal.tsx"
import "../modal/LoginModal.css"

const Menu = () => {

  const [openModal, setOpenModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = () => {
    setOpenModal(true);
  }
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
      console.log(isModalOpen)
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  return (
    <>
      <NavBar handleOpenModal={handleOpenModal}></NavBar>
      <Carrousel></Carrousel>
      <Footer></Footer>

      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>

  )
}

export default Menu
