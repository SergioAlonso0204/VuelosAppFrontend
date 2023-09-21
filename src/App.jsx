import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import InicioSesion from './views/InicioSesion';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
