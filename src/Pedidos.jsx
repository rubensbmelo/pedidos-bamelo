
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

function Pedidos() {
  const [data, setData] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [filtroCliente, setFiltroCliente] = useState('Todos');
  const [filtroMes, setFiltroMes] = useState('Todos');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/carteira-pedidos.xlsm');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);

        const clientesUnicos = Array.from(new Set(jsonData.map(item => item.Cliente))).sort();
        setClientes(clientesUnicos);
      } catch (error) {
        console.error('Erro ao carregar a planilha:', error);
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
    const [dia, mes] = dataStr.split('/');
    return nomeMes[mes];
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
              <th className="px-4 py-2 border">Pedido</th>
              <th className="px-4 py-2 border">Produto</th>
              <th className="px-4 py-2 border">OC/Item OC</th>
              <th className="px-4 py-2 border">Referência</th>
              <th className="px-4 py-2 border">Cliente</th>
              <th className="px-4 py-2 border">Data</th>
              <th className="px-4 py-2 border">PESO</th>
              <th className="px-4 py-2 border">Qtde</th>
              <th className="px-4 py-2 border">Vl.</th>
              <th className="px-4 py-2 border">Fator</th>
              <th className="px-4 py-2 border">TOTAL</th>
              <th className="px-4 py-2 border">COMISSÃO</th>
              <th className="px-4 py-2 border">FATURADO</th>
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.map((pedido, index) => (
              <tr key={index} className="text-sm">
                <td className="px-4 py-2 border">{pedido.Pedido}</td>
                <td className="px-4 py-2 border">{pedido.Produto}</td>
                <td className="px-4 py-2 border">{pedido['OC/Item OC']}</td>
                <td className="px-4 py-2 border">{pedido.Referência}</td>
                <td className="px-4 py-2 border">{pedido.Cliente}</td>
                <td className="px-4 py-2 border">{pedido.Data}</td>
                <td className="px-4 py-2 border">{pedido.PESO}</td>
                <td className="px-4 py-2 border">{pedido.Qtde}</td>
                <td className="px-4 py-2 border">{pedido.Vl}</td>
                <td className="px-4 py-2 border">{pedido.Fator}</td>
                <td className="px-4 py-2 border">{pedido.TOTAL}</td>
                <td className="px-4 py-2 border">{pedido.COMISSÃO}</td>
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
