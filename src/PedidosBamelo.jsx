
import React, { useState } from 'react';
import Pedidos from './Pedidos';

export default function PedidosBamelo() {
  const [secaoAtiva, setSecaoAtiva] = useState('Dashboard');

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Menu lateral */}
      <div style={{
        width: '240px',
        background: 'linear-gradient(180deg, #5e2d24, #8b1c1c)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 0'
      }}>
        <div>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 20px' }}>
            {['Dashboard', 'Pedidos', 'Comissões', 'Implantar', 'Faturados', 'Configurações'].map(item => (
              <button
                key={item}
                onClick={() => setSecaoAtiva(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  textAlign: 'left',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight: secaoAtiva === item ? 'bold' : 'normal',
                  backgroundColor: secaoAtiva === item ? 'rgba(255,255,255,0.1)' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={handleLogout} style={{
            backgroundColor: '#a11212',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            SAIR
          </button>
        </div>
      </div>

      {/* Conteúdo principal dinâmico */}
      <div style={{ flexGrow: 1, backgroundColor: '#f9f9f9', padding: '30px' }}>
        {secaoAtiva === 'Dashboard' && <h2>Bem-vindo ao sistema Pedidos Bamelo</h2>}
        {secaoAtiva === 'Pedidos' && <Pedidos />}
        {secaoAtiva === 'Comissões' && <h2>Tela de Comissões</h2>}
        {secaoAtiva === 'Implantar' && <h2>Tela de Implantação</h2>}
        {secaoAtiva === 'Faturados' && <h2>Tela de Faturados</h2>}
        {secaoAtiva === 'Configurações' && <h2>Tela de Configurações</h2>}
      </div>
    </div>
  );
}
