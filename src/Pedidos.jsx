
import React, { useEffect, useState } from "react";

function Pedidos() {
  const [dados, setDados] = useState([]);
  const [clienteFiltro, setClienteFiltro] = useState("Todos");
  const [mesFiltro, setMesFiltro] = useState("Todos");

  useEffect(() => {
    fetch("/pedidos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("📦 Dados carregados:", data);
        setDados(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar JSON:", error);
      });
  }, []);

  const nomeMes = {
    "01": "Janeiro", "02": "Fevereiro", "03": "Março", "04": "Abril",
    "05": "Maio", "06": "Junho", "07": "Julho", "08": "Agosto",
    "09": "Setembro", "10": "Outubro", "11": "Novembro", "12": "Dezembro"
  };

  const extrairMes = (dataStr) => {
    if (!dataStr) return '';
    let partes = [];

    if (dataStr.includes("/")) {
      partes = dataStr.split('/');
      if (partes.length !== 3) return '';
      return nomeMes[partes[1]] || '';
    } else if (dataStr.includes("-")) {
      partes = dataStr.split('-');
      return nomeMes[partes[1]] || '';
    }

    return '';
  };

  const clientesUnicos = ["Todos", ...Array.from(new Set(dados.map(item => item.Cliente)))];
  const mesesUnicos = ["Todos", ...Array.from(new Set(dados.map(item => extrairMes(item.Data))))];

  const dadosFiltrados = dados.filter(item => {
    const mesItem = extrairMes(item.Data);
    return (clienteFiltro === "Todos" || item.Cliente === clienteFiltro) &&
           (mesFiltro === "Todos" || mesItem === mesFiltro);
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Pedidos Implantados</h2>
      <div style={{ margin: "1rem 0" }}>
        <label>
          Filtrar por Cliente:
          <select value={clienteFiltro} onChange={(e) => setClienteFiltro(e.target.value)}>
            {clientesUnicos.map((cliente, i) => (
              <option key={i} value={cliente}>{cliente}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: "1rem" }}>
          Filtrar por Mês:
          <select value={mesFiltro} onChange={(e) => setMesFiltro(e.target.value)}>
            {mesesUnicos.map((mes, i) => (
              <option key={i} value={mes}>{mes}</option>
            ))}
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Pedido</th><th>Produto</th><th>OC/Item OC</th><th>Referência</th><th>Cliente</th>
            <th>Data</th><th>PESO</th><th>Qtde</th><th>Vl.</th><th>Fator</th>
            <th>TOTAL</th><th>COMISSÃO</th><th>FATURADO</th>
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.map((item, i) => (
            <tr key={i}>
              <td>{item.Pedido}</td>
              <td>{item.Produto}</td>
              <td>{item["OC/Item_OC"]}</td>
              <td>{item.Referência}</td>
              <td>{item.Cliente}</td>
              <td>{item.Data}</td>
              <td>{item.PESO}</td>
              <td>{item.Qtde}</td>
              <td>{item["Vl."]}</td>
              <td>{item.Fator}</td>
              <td>{item.TOTAL}</td>
              <td>{item["COMISSÃO"]}</td>
              <td>{item.FATURADO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pedidos;
