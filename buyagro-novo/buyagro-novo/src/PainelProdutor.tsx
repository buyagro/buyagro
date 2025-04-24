import React, { useEffect, useState } from 'react';

const PainelProdutor = () => {
  const [aba, setAba] = useState('cadastro');
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ categoria: '', produto: '', volume: '', unidade: '' });

  const logado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
  const todosPedidos = JSON.parse(localStorage.getItem('produtosDesejados') || '[]');

  useEffect(() => {
    if (!logado) return;
    const pedidosDoProdutor = todosPedidos.filter((p: any) => p.email === logado.email);
    setProdutos(pedidosDoProdutor);
  }, []);

  const salvarProduto = () => {
    if (!logado) return;
    const novos = [...produtos, { ...novoProduto, email: logado.email }];
    setProdutos(novos);
    localStorage.setItem('produtosDesejados', JSON.stringify([...todosPedidos, { ...novoProduto, email: logado.email }]));
    setNovoProduto({ categoria: '', produto: '', volume: '', unidade: '' });
  };

  if (!logado) {
    return <div style={{ padding: '20px' }}>Nenhum produtor logado.</div>;
  }

  const categorias = {
    'Defensivos Químicos': ['Glifosato', 'Cletodim', '2,4-D', 'Clorotalonil', 'Mancozeb', 'Diafentiuron', 'Fox-X Pro'],
    'Biológicos': ['Tricoderma', 'Bacillus thuringiensis', 'Bradyrhizobium', 'Azospirillum'],
    'Adubos': ['MAP', 'Ureia', 'Cloreto de Potássio', 'Boro'],
    'Nutrição Foliar': ['Zinco', 'Cálcio', 'Manganês', 'MAP', 'Potássio', 'Magnésio', 'Aminoácidos', 'Hormônios', 'Cobalto', 'Molibdênio', 'Níquel']
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Painel do Produtor</h2>
      <div>
        <button onClick={() => setAba('cadastro')}>Cadastro</button>
        <button onClick={() => setAba('produtos')}>Produtos Desejados</button>
      </div>

      {aba === 'cadastro' && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Nome:</strong> {logado.nome}</p>
          <p><strong>Fazenda:</strong> {logado.fazenda}</p>
          <p><strong>Telefone:</strong> {logado.telefone}</p>
          <p><strong>Email:</strong> {logado.email}</p>
          <p><strong>Cultura:</strong> {logado.cultura}</p>
          <p><strong>Área:</strong> {logado.area}</p>
          <p><strong>Safra:</strong> {logado.safra}</p>
        </div>
      )}

      {aba === 'produtos' && (
        <div style={{ marginTop: '20px' }}>
          <h3>Produtos Desejados</h3>
          <select value={novoProduto.categoria} onChange={(e) => setNovoProduto({ ...novoProduto, categoria: e.target.value })}>
            <option value="">Selecione a categoria</option>
            {Object.keys(categorias).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            <option value="Outros Produtos">Outros Produtos</option>
          </select>

          {novoProduto.categoria && novoProduto.categoria !== 'Outros Produtos' && (
            <select value={novoProduto.produto} onChange={(e) => setNovoProduto({ ...novoProduto, produto: e.target.value })}>
              <option value="">Selecione o produto</option>
              {categorias[novoProduto.categoria].map((prod) => (
                <option key={prod} value={prod}>{prod}</option>
              ))}
            </select>
          )}

          {novoProduto.categoria === 'Outros Produtos' && (
            <input type="text" placeholder="Digite o produto" value={novoProduto.produto} onChange={(e) => setNovoProduto({ ...novoProduto, produto: e.target.value })} />
          )}

          <input type="text" placeholder="Volume" value={novoProduto.volume} onChange={(e) => setNovoProduto({ ...novoProduto, volume: e.target.value })} />
          <input type="text" placeholder="Unidade (kg/L/Ton)" value={novoProduto.unidade} onChange={(e) => setNovoProduto({ ...novoProduto, unidade: e.target.value })} />
          <button onClick={salvarProduto}>Salvar Produto</button>

          <ul style={{ marginTop: '20px' }}>
            {produtos.map((p, i) => (
              <li key={i}>
                <strong>{p.categoria}:</strong> {p.produto} - {p.volume} {p.unidade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PainelProdutor;



