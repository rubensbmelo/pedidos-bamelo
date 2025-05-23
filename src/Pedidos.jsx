
import { useEffect, useState } from 'react';

export default function Pedidos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('/pedidos.json')
      .then(res => res.json())
      .then(setDados);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#8b1c1c' }}>Pedidos Implantados</h2>
      <div style={{
        overflowX: 'auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
              {['Pedido', 'Produto', 'OC/Item OC', 'Referência', 'Cliente', 'Data', 'PESO', 'Qtde', 'Vl.', 'Fator', 'TOTAL', 'COMISSÃO', 'FATURADO'].map((col, i) => (
                <th key={i} style={{ padding: '10px', fontWeight: 'bold', fontSize: '14px' }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, i) => (
              <tr key={i}>
                {['Pedido', 'Produto', 'OC/Item OC', 'Referência', 'Cliente', 'Data', 'PESO', 'Qtde', 'Vl.', 'Fator', 'TOTAL', 'COMISSÃO', 'FATURADO'].map((col, j) => (
                  <td key={j} style={{ padding: '10px', fontSize: '13px', borderBottom: '1px solid #eee' }}>{linha[col] || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
