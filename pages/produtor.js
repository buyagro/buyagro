import { useState } from 'react';
import Layout from '../components/Layout';

export default function Produtor() {
  const [dados, setDados] = useState({
    nome: '',
    cultura: 'Soja',
    area: '',
    telefone: '',
    localizacao: '',
    produtos: {
      glifosato: '', d24: '', cletodim: '', clorotalonil: '', mancozeb: '', outros: ''
    }
  });

  const handleChange = (field, value) => {
    setDados(prev => ({ ...prev, [field]: value }));
  };

  const handleProdutoChange = (produto, value) => {
    setDados(prev => ({ ...prev, produtos: { ...prev.produtos, [produto]: value } }));
  };

  const enviar = () => {
    const mensagem = `Nome: ${dados.nome}\nCultura: ${dados.cultura}\nÁrea: ${dados.area} ha\nTelefone: ${dados.telefone}\nLocalização: ${dados.localizacao}\nProdutos: ${JSON.stringify(dados.produtos)}`;
    const link = `https://wa.me/55${dados.telefone.replace(/\D/g, '')}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  };

  return (
    <Layout>
      <h2>Cadastro do Produtor</h2>
      <input placeholder="Nome" onChange={e => handleChange('nome', e.target.value)} /><br />
      <select onChange={e => handleChange('cultura', e.target.value)} defaultValue="Soja">
        <option>Soja</option><option>Milho</option><option>Algodão</option>
        <option>Tomate</option><option>Cana de açúcar</option><option>Sorgo</option><option>Ervilha</option>
      </select><br />
      <input placeholder="Área (ha)" onChange={e => handleChange('area', e.target.value)} /><br />
      <input placeholder="Telefone (somente números)" onChange={e => handleChange('telefone', e.target.value)} /><br />
      <input placeholder="Localização" onChange={e => handleChange('localizacao', e.target.value)} /><br /><br />
      <h4>Produtos desejados:</h4>
      <input placeholder="Glifosato (L)" onChange={e => handleProdutoChange('glifosato', e.target.value)} /><br />
      <input placeholder="2,4-D (L)" onChange={e => handleProdutoChange('d24', e.target.value)} /><br />
      <input placeholder="Cletodim (L)" onChange={e => handleProdutoChange('cletodim', e.target.value)} /><br />
      <input placeholder="Clorotalonil (L)" onChange={e => handleProdutoChange('clorotalonil', e.target.value)} /><br />
      <input placeholder="Mancozeb (kg)" onChange={e => handleProdutoChange('mancozeb', e.target.value)} /><br />
      <input placeholder="Outros produtos" onChange={e => handleProdutoChange('outros', e.target.value)} /><br />
      <button style={{ marginTop: 10 }} onClick={enviar}>Enviar Pedido via WhatsApp</button>
    </Layout>
  );
}
