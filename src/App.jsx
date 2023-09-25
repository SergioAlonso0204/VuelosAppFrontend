import './styles/globalStyles.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import InicioSesion from './views/InicioSesion';
import Dashboard from './views/Dashboard';
import Inicio from './Inicio'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* Agrega el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Inicio />} /> {}
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;