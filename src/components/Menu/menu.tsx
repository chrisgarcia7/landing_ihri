import React,  {useState}  from 'react';
import Carrousel from './components/carrousel.tsx';
import Navbar from '../../globalComponents/navbar.tsx';
import '../paginaInicio/styles.css'
const Menu = () => {

  const [openModal, setOpenModal] = useState(false);

  const setModal =() => {
    setOpenModal(true);
  }

  return (
    <>
    
    <div style={{justifyItems: 'center', padding:'20px'}}>  
    <Navbar handleOpenModal={setModal}></Navbar>
    <Carrousel></Carrousel>
    </div>
  
    </>
  
  )
}

export default Menu
