import { useState } from 'react';

export default function PedidosBamelo() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    if (user === 'bamelo' && pass === '123456') {
      setLoggedIn(true);
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  if (!loggedIn) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #5e2d24, #752d2f, #3d1f1b)'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            margin: '0 auto 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="/logo.png" alt="Logo Bamelo" style={{ width: '60px', height: '60px' }} />
          </div>
          <h1 style={{ color: '#fff', marginBottom: '5px' }}>BAMELO REPRESENTAÇÕES</h1>
          <p style={{ color: '#ddd', marginBottom: '20px' }}>Sistema de Pedidos Online</p>
          <input
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            style={{
              width: '100%',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              border: 'none'
            }}
          />
          <input
            placeholder="Senha"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{
              width: '100%',
              marginBottom: '15px',
              padding: '10px',
              borderRadius: '5px',
              border: 'none'
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              backgroundColor: '#8b1c1c',
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo ao sistema Pedidos Bamelo</h2>
      <p>Em breve: cadastro, consulta e geração de PDFs.</p>
    </div>
  );
}