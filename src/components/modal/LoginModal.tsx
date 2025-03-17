import React, { useState, useEffect } from "react";
import "./LoginModal.css";
import { auth } from "../../firebase/firebaseConfig.ts";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useContextPage } from "../../Context/Provider.tsx";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const {setUsuario, setCorreo}= useContextPage()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);

  
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  
  const handleClose = () => {
    setEmail(""); 
    setPassword("");
    setError("");
    onClose(); 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

  
  const handleLogin = async () => {
    if (isFormValid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso");
        setCorreo(email)
        handleClose(); 
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Has cerrado sesión");
      setCorreo("")
      setUsuario(null);
      handleClose();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {user ? (
          <>
            <h2>Bienvenido, {user.email}</h2>
            <button className="btn menu-btn">
            <a href="/menu" style={{ color: 'white', textDecoration: 'none' }}>
                Menu
              </a>
            </button>
            <br></br>
            <button className="btn logout-btn" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <h2>Iniciar Sesión</h2>
            {error && <p className="error-message">{error}</p>}
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
              <button
                type="button"
                className="btn login-btn"
                onClick={handleLogin}
                disabled={!isFormValid}
              >
                Iniciar Sesión
              </button>
            </form>
          </>
        )}
        <button className="btn close-btn" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default LoginModal;
