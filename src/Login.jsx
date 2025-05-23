import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(160deg, #5e2d24, #8b1c1c)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img src="/logo.png" alt="Logo" style={{ width: '150px', marginBottom: '30px' }} />
      <form onSubmit={handleLogin} style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 12px rgba(0,0,0,0.2)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <input type="text" placeholder="Usuário" required style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }} />
        <input type="password" placeholder="Senha" required style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }} />
        <button type="submit" style={{
          backgroundColor: '#8b1c1c',
          color: '#fff',
          padding: '12px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          LOGIN
        </button>
      </form>
    </div>
  );
}