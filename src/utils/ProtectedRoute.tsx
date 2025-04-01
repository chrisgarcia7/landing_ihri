import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContextPage } from "../Context/Provider.tsx";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  const { usuario, isLoading } = useContextPage();

  if (isLoading) return null; 

  return usuario ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;