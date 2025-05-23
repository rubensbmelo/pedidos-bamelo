
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Pedidos from './Pedidos';
import PedidosBamelo from './PedidosBamelo';

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={() => setLogado(true)} />} />
        <Route path="/pedidos" element={logado ? <Pedidos /> : <Navigate to="/login" />} />
        <Route path="/home" element={logado ? <PedidosBamelo /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
