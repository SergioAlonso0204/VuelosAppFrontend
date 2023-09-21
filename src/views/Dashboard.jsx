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
      <h2>Dashboard</h2>
      {/* Contenido del dashboard */}
    </div>
  );
}

export default Dashboard;
