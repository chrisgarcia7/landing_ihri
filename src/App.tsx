import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/paginaInicio/paginaInicio.tsx'
import Menu from './components/Menu/menu.tsx';
import ProviderPage, { useContextPage } from './Context/Provider.tsx';
import AdminPage from './components/AdminPage/AdminPage.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';

function App() {
  return (
    <BrowserRouter>
      <ProviderPage>
        <AuthRoutes />
      </ProviderPage>
    </BrowserRouter>
  );
}

function AuthRoutes() {
  const { usuario } = useContextPage(); 

  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/menu" element={<Menu />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}
export default App;
