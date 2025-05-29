import React, { useEffect, useState } from 'react';

function Pedidos() {
  const [data, setData] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [filtroCliente, setFiltroCliente] = useState('Todos');
  const [filtroMes, setFiltroMes] = useState('Todos');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usar o arquivo JSON em vez do Excel
        const response = await fetch('/pedidos.json');
        const jsonData = await response.json();
        setData(jsonData);

        const clientesUnicos = Array.from(new Set(jsonData.map(item => item.Cliente))).sort();
        setClientes(clientesUnicos);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };
    fetchData();
  }, []);

  const nomeMes = {
    '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril',
    '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto',
    '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
  };

  const extrairMes = (dataStr) => {
    if (!dataStr || typeof dataStr !== 'string') return '';
    const partes = dataStr.split('/');
    if (partes.length !== 3) return '';
    return nomeMes[partes[1]] || '';
  };

  const meses = Array.from(new Set(data.map(item => extrairMes(item.Data)))).filter(Boolean).sort((a, b) => {
    const ordem = Object.values(nomeMes);
    return ordem.indexOf(a) - ordem.indexOf(b);
  });

  const dadosFiltrados = data.filter(item => {
    const clienteMatch = filtroCliente === 'Todos' || item.Cliente === filtroCliente;
    const mesMatch = filtroMes === 'Todos' || extrairMes(item.Data) === filtroMes;
    return clienteMatch && mesMatch;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#7c2d12] mb-4">Pedidos Implantados</h1>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="font-semibold mr-2">Filtrar por Cliente:</label>
          <select
            value={filtroCliente}
            onChange={(e) => setFiltroCliente(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option>Todos</option>
            {clientes.map(cliente => (
              <option key={cliente}>{cliente}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold mr-2">Filtrar por Mês:</label>
          <select
            value={filtroMes}
            onChange={(e) => setFiltroMes(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option>Todos</option>
            {meses.map(mes => (
              <option key={mes}>{mes}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {['Pedido','Produto','OC/Item OC','Referência','Cliente','Data','PESO','Qtde','Vl.','Fator','TOTAL','COMISSÃO','FATURADO'].map(col => (
                <th key={col} className="px-4 py-2 border">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.map((pedido, index) => (
              <tr key={index} className="text-sm">
                <td className="px-4 py-2 border">{pedido.Pedido}</td>
                <td className="px-4 py-2 border">{pedido.Produto}</td>
                <td className="px-4 py-2 border">{pedido["OC/Item OC"]}</td>
                <td className="px-4 py-2 border">{pedido.Referência}</td>
                <td className="px-4 py-2 border">{pedido.Cliente}</td>
                <td className="px-4 py-2 border">{pedido.Data}</td>
                <td className="px-4 py-2 border">{pedido.PESO}</td>
                <td className="px-4 py-2 border">{pedido.Qtde}</td>
                <td className="px-4 py-2 border">{pedido["Vl."]}</td>
                <td className="px-4 py-2 border">{pedido.Fator}</td>
                <td className="px-4 py-2 border">{pedido.TOTAL}</td>
                <td className="px-4 py-2 border">{pedido["COMISSÃO"]}</td>
                <td className="px-4 py-2 border">{pedido.FATURADO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pedidos;
