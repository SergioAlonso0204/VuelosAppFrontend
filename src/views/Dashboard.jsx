import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si el usuario está autenticado (por ejemplo, mediante el token)
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      // Si no está autenticado, redirige al inicio de sesión
      navigate.push('/inicio-sesion');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard de Vuelos</h2>
      <div className="flight-status">
        {/* Aquí puedes mostrar información sobre vuelos en tiempo real */}
        <h3>Estado de los vuelos</h3>
        {/* Agrega una lista de vuelos con detalles */}
        <ul>
          <li>
            <strong>Vuelo 123:</strong> Salida a las 10:00 AM
          </li>
          <li>
            <strong>Vuelo 456:</strong> Salida a las 12:00 PM
          </li>
          {/* ... más vuelos ... */}
        </ul>
      </div>
      <div className="user-reservations">
        {/* Muestra las reservaciones del usuario */}
        <h3>Tus reservaciones</h3>
        {/* Agrega una lista de las reservaciones del usuario */}
        <ul>
          <li>
            <strong>Vuelo 123:</strong> Fecha de viaje: 2023-10-15
          </li>
          <li>
            <strong>Vuelo 456:</strong> Fecha de viaje: 2023-11-20
          </li>
          {/* ... más reservaciones ... */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
