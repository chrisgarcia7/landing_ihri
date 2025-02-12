import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicio } from './components/paginaInicio/paginaInicio.tsx'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<PaginaInicio/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
