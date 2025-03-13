import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/paginaInicio/paginaInicio.tsx'
import Menu from './components/Menu/menu.tsx';
import ProviderPage from './Context/Provider.tsx';
import AdminPage from './components/AdminPage/AdminPage.tsx';

function App() {
  return (

    <BrowserRouter>
      <ProviderPage>

        <Routes>
          <Route path='/' element={<PaginaInicio />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
           <Route path='/admin' element={<AdminPage/>}></Route>
        </Routes>
      </ProviderPage>

    </BrowserRouter>

  );
}

export default App;
