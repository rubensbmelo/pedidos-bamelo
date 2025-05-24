
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function Pedidos() {
  const [dados, setDados] = useState([]);
  const [clienteFiltro, setClienteFiltro] = useState('');
  const [clientesUnicos, setClientesUnicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/CARTEIRA DE PEDIDO IMPLANTADOS.xlsm');
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheet = workbook.Sheets['BASE'];
      const json = XLSX.utils.sheet_to_json(sheet);

      setDados(json);
      const clientes = [...new Set(json.map(item => item.Cliente))];
      setClientesUnicos(clientes);
    };

    fetchData();
  }, []);

  const dadosFiltrados = clienteFiltro
    ? dados.filter(item => item.Cliente === clienteFiltro)
    : dados;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <h2 style={{ marginBottom: '20px', color: '#7a1f1f' }}>Pedidos Implantados</h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Filtrar por Cliente:</label>
        <select
          value={clienteFiltro}
          onChange={e => setClienteFiltro(e.target.value)}
          style={{ padding: '5px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Todos</option>
          {clientesUnicos.map(cliente => (
            <option key={cliente} value={cliente}>{cliente}</option>
          ))}
        </select>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '1200px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', textAlign: 'center' }}>
              <th style={th}>Pedido</th>
              <th style={th}>Cliente</th>
              <th style={th}>Produto</th>
              <th style={th}>OC/Item OC</th>
              <th style={th}>Referência</th>
              <th style={th}>Data</th>
              <th style={th}>PESO (t)</th>
              <th style={th}>Qtde</th>
              <th style={th}>Vl.</th>
              <th style={th}>Fator</th>
              <th style={th}>TOTAL</th>
              <th style={th}>COMISSÃO</th>
              <th style={th}>FATURADO</th>
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.map((item, index) => (
              <tr key={index}>
                <td style={td}>{item.Pedido}</td>
                <td style={td}>{item.Cliente}</td>
                <td style={td}>{item.Produto}</td>
                <td style={td}>{item['OC/Item OC']}</td>
                <td style={td}>{item.Referência}</td>
                <td style={td}>{item.Data?.slice(0, 10)}</td>
                <td style={td}>{item.PESO?.toString().replace('.', ',')}</td>
                <td style={td}>{Number(item.Qtde).toLocaleString('pt-BR')}</td>
                <td style={td}>{item['Vl.']}</td>
                <td style={td}>{item.Fator}</td>
                <td style={td}>{item.TOTAL}</td>
                <td style={td}>{item['COMISSÃO']}</td>
                <td style={td}>{item.FATURADO?.toString().toLowerCase() === 'sim' ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th = {
  padding: '8px',
  border: '1px solid #ccc',
  whiteSpace: 'nowrap'
};

const td = {
  padding: '8px',
  border: '1px solid #eee',
  textAlign: 'left',
  wordBreak: 'break-word'
};
