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
        justifyContent: 'space-between',
        padding: '20px 0'
      }}>
        <div>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
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
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={() => window.location.href = '/'} style={{
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

      {/* Conteúdo principal */}
      <div style={{ flexGrow: 1, backgroundColor: '#f9f9f9' }}>
        {/* Cabeçalho */}
        <div style={{
          backgroundColor: '#8b1c1c',
          color: '#fff',
          padding: '20px 30px',
          fontSize: '20px',
          fontWeight: 'bold',
        }}>
          Bem-vindo ao sistema Pedidos Bamelo
        </div>

        {/* Área de conteúdo */}
        <div style={{ padding: '30px' }}>
          <p style={{ color: '#555' }}>Escolha uma opção no menu para começar.</p>
        </div>
      </div>
    </div>
  );
}