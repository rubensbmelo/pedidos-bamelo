export default function PedidosBamelo() {
  const menuStyle = {
    width: '240px',
    background: 'linear-gradient(180deg, #5e2d24, #8b1c1c)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    height: '100vh'
  };

  const menuItemStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    transition: 'background 0.3s'
  };

  const menuItemHoverStyle = {
    ...menuItemStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={menuStyle}>
        <div>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 20px' }}>
            {['Dashboard', 'Pedidos', 'Comissões', 'Implantar', 'Faturados', 'Configurações'].map((item, index) => (
              <a href="#" key={index} style={menuItemStyle}>{item}</a>
            ))}
          </nav>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={() => window.location.href = '/login'} style={{
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

      <div style={{ flexGrow: 1, backgroundColor: '#f1f1f1', padding: '30px' }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}>
          <h1 style={{ margin: '0 0 15px 0', color: '#333' }}>Bem-vindo ao sistema Pedidos Bamelo</h1>
          <p style={{ color: '#666' }}>Escolha uma opção no menu para começar.</p>
        </div>
      </div>
    </div>
  );
}