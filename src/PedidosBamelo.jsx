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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: '20%' }}>
        <h1>Pedidos Bamelo</h1>
        <input placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} />
        <input placeholder="Senha" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo ao sistema Pedidos Bamelo</h2>
      <p>Aqui futuramente terá: cadastro, consulta e geração de PDFs.</p>
    </div>
  );
}