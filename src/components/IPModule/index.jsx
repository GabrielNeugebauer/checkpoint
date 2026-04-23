import SearchBar from '../SearchBar'
import IPContainer from '../IPContainer'
import { useState } from 'react'
import './styles.css'

export default function IPModule() {
  const [ip, setIP] = useState([]);
  const [rodou, setRodou] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSearch(inputIP) {
    if (!inputIP) return;
    setRodou(true);
    setLoading(true);
    try {
      if (!inputIP.includes('.')) {
        throw new Error('Invalid IP format');
      }
      if (inputIP.split('.').length !== 4) {
        throw new Error('Invalid IP format');
      }
      const response = await fetch(`https://rdap.registro.br/ip/${inputIP}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIP(data.entities || []);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setIP([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="title-section">
        <h1>Checagem de IP</h1>
        <span>&ensp;&ensp;&ensp;Verifique o que é possível saber sobre seu IP com uma pesquisa rápida</span>
        <br />
        <span>&ensp;&ensp;&ensp;Fonte dos dados: Registro.br</span>
        <br />
        <span> Seu IP atual: <span style={{ fontWeight: 'bold', color: 'red' }}>EM CONSTRUÇÃO</span></span>
      </div>
      <SearchBar termo="IP" onSearch={onSearch} />
      <br />
      {loading && <div className="loading">Carregando...</div>}
      {!loading && rodou && <IPContainer ip={ip} />}
    </div>
  );
}