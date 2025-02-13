import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  PaginaInicio  from './components/paginaInicio/paginaInicio.tsx'
import  Menu  from './components/Menu/menu.tsx';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<PaginaInicio/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
