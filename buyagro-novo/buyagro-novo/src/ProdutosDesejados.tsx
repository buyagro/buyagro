import React, { useEffect, useState } from 'react';

const categorias = {
  Defensivos: ['Glifosato', 'Cletodim', '2,4D', 'Clorotalonil', 'Mancozeb', 'Diafenturon', 'Fox Xpro'],
  Biológicos: ['Trichoderma spp.', 'Bacillus thuringiensis', 'Bradyrhizobium', 'Azospirillum'],
  Adubos: ['MAP', 'Uréia', 'Cloreto de Potássio', 'Boro'],
  Nutrição: ['Boro', 'Zinco', 'Cálcio', 'Manganês', 'MAP', 'Potássio', 'Magnésio', 'Aminoácido', 'Hormônios', 'Cobalto', 'Molibdênio', 'Níquel'],
  Outros: []
};

const unidadesPorCategoria: any = {
  Defensivos: 'L',
  Biológicos: 'doses',
  Adubos: 'Ton',
  Nutrição: 'kg',
  Outros: 'unidade'
};

const ProdutosDesejados = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Defensivos');
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [volume, setVolume] = useState('');
  const [produtos, setProdutos] = useState<any[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('produtosDesejados');
    if (dadosSalvos) {
      setProdutos(JSON.parse(dadosSalvos));
    }
  }, []);

  const salvarProdutos = () => {
    localStorage.setItem('produtosDesejados', JSON.stringify(produtos));

    const dadosAdmin = JSON.parse(localStorage.getItem('dadosAdmin') || '[]');
    const novaEntrada = {
      dataHora: new Date().toLocaleString(),
      produtos: produtos,
    };
    localStorage.setItem('dadosAdmin', JSON.stringify([...dadosAdmin, novaEntrada]));

    alert('Produtos salvos e enviados para o painel administrativo!');
  };

  const adicionarProduto = () => {
    if (!produtoSelecionado || !volume) {
      alert('Preencha todos os campos');
      return;
    }
    const novo = {
      categoria: categoriaSelecionada,
      nome: produtoSelecionado,
      volume: volume,
      unidade: unidadesPorCategoria[categoriaSelecionada]
    };

    if (editandoIndex !== null) {
      const atualizados = [...produtos];
      atualizados[editandoIndex] = novo;
      setProdutos(atualizados);
      setEditandoIndex(null);
    } else {
      setProdutos([...produtos, novo]);
    }

    setProdutoSelecionado('');
    setVolume('');
  };

  const editarProduto = (index: number) => {
    const produto = produtos[index];
    setCategoriaSelecionada(produto.categoria);
    setProdutoSelecionado(produto.nome);
    setVolume(produto.volume);
    setEditandoIndex(index);
  };

  const excluirProduto = (index: number) => {
    const atualizados = produtos.filter((_, i) => i !== index);
    setProdutos(atualizados);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Produtos Desejados</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <select value={categoriaSelecionada} onChange={e => setCategoriaSelecionada(e.target.value)} style={{ padding: '10px' }}>
          {Object.keys(categorias).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={produtoSelecionado} onChange={e => setProdutoSelecionado(e.target.value)} style={{ padding: '10px' }}>
          <option value="">Selecione o produto</option>
          {categorias[categoriaSelecionada].length > 0 ? (
            categorias[categoriaSelecionada].map(prod => (
              <option key={prod} value={prod}>{prod}</option>
            ))
          ) : (
            <option value="outro">Outro (digite abaixo)</option>
          )}
        </select>

        {categoriaSelecionada === "Outros" && (
          <input
            type="text"
            placeholder="Nome do produto"
            value={produtoSelecionado}
            onChange={e => setProdutoSelecionado(e.target.value)}
            style={{ padding: '10px', width: '200px' }}
          />
        )}

        <input
          type="text"
          placeholder={`Volume (${unidadesPorCategoria[categoriaSelecionada]})`}
          value={volume}
          onChange={e => setVolume(e.target.value)}
          style={{ padding: '10px', width: '200px' }}
        />

        <button onClick={adicionarProduto} style={{ padding: '10px 20px', background: '#007b33', color: '#fff' }}>
          {editandoIndex !== null ? 'Salvar Alterações' : 'Adicionar'}
        </button>
      </div>

      <ul>
        {produtos.map((prod, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{prod.categoria}</strong> - {prod.nome} - {prod.volume} {prod.unidade}
            <button onClick={() => editarProduto(index)} style={{ marginLeft: '10px' }}>Editar</button>
            <button onClick={() => excluirProduto(index)} style={{ marginLeft: '5px', background: '#d9534f', color: 'white' }}>Excluir</button>
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={salvarProdutos} style={{ padding: '10px 20px', background: '#004d00', color: '#fff' }}>
          Salvar Produtos
        </button>
      </div>
    </div>
  );
};

export default ProdutosDesejados;
