export default function PedidosBamelo() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Menu lateral */}
      <div style={{
        width: '240px',
        background: 'linear-gradient(180deg, #5e2d24, #8b1c1c)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '120px', height: 'auto' }} />
          <h3 style={{ marginTop: '10px', fontSize: '16px' }}>BAMELO</h3>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '0 20px' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Pedidos</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Comissões</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Implantar</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Faturados</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Configurações</a>
        </nav>
      </div>

      {/* Área principal */}
      <div style={{
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        padding: '30px'
      }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>Bem-vindo ao sistema Pedidos Bamelo</h1>
        <p style={{ color: '#555' }}>Escolha uma opção no menu para começar.</p>
      </div>
    </div>
  );
}