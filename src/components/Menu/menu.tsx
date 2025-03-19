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

      <div className='menu' style={{ justifyItems: 'center', padding: '20px' }}>
        <NavBar handleOpenModal={setModal}></NavBar>
        <Carrousel></Carrousel>
      </div>
      <Footer></Footer>
    </>

  )
}

export default Menu
