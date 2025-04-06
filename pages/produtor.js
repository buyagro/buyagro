import { useState } from 'react';
import Layout from '../components/Layout';

export default function Produtor() {
  const [nome, setNome] = useState('');
  const [produto, setProduto] = useState('Glifosato');
  const [volume, setVolume] = useState('');

  const gerarPedido = () => {
    const msg = `Olá, sou ${nome}, quero ${volume}L de ${produto} pelo preço negociado.`;
    const link = `https://wa.me/5561999999999?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
  };

  return (
    <Layout>
      <h2>Área do Produtor</h2>
      <input
        placeholder="Seu nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      /><br />
      <select value={produto} onChange={e => setProduto(e.target.value)} style={{ marginTop: 10 }}>
        <option>Glifosato</option>
        <option>Cletodim</option>
        <option>2,4-D</option>
        <option>Fox Xpro</option>
      </select><br />
      <input
        placeholder="Volume desejado (L)"
        value={volume}
        onChange={e => setVolume(e.target.value)}
      /><br />
      <button style={{ marginTop: 10 }} onClick={gerarPedido}>
        Autorizar Compra / WhatsApp
      </button>
    </Layout>
  );
}
