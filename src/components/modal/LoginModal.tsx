import React, { useState } from "react";
import "./LoginModal.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  
  const handleClose = () => {
    setEmail(""); 
    setPassword(""); 
    onClose(); 
  };

  
  const handleLogin = () => {
    if (isFormValid) {
      handleClose(); 
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {}
          <button
            type="button"
            className="btn login-btn"
            onClick={handleLogin}
            disabled={!isFormValid} 
          >
            Iniciar Sesión
          </button>
        </form>
        {}
        <button className="btn close-btn" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default LoginModal;
