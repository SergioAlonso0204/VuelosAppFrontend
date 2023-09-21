import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/inicioSesion.css';

function InicioSesion() {
  const [correoElectronico, setCorreoElectronico] = useState(''); // Cambiado a correoElectronico
  const [contraseña, setContraseña] = useState(''); // Cambiado a contraseña
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleCorreoElectronicoChange = (e) => {
    setCorreoElectronico(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correoElectronico, contraseña }), // Cambiado a correoElectronico y contraseña
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem('authToken', token);

        navigate('/dashboard');
      } else {
        setError('Credenciales incorrectas');
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="correoElectronico">Correo Electrónico</label> {/* Cambiado a correoElectronico */}
          <input
            type="email"
            id="correoElectronico"
            value={correoElectronico}
            onChange={handleCorreoElectronicoChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="contraseña">Contraseña</label> {/* Cambiado a contraseña */}
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={handleContraseñaChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default InicioSesion;
