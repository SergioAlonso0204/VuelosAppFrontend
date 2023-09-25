import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Logo.png" alt="Logo de la App" />
        <h1>AppVuelos</h1>
      </div>
      <div className="navbar-buttons">
        <Link to="/inicio-sesion">
          <button>Iniciar Sesión</button>
        </Link>
        <Link to="/crear-cuenta">
          <button>Crear Cuenta</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;