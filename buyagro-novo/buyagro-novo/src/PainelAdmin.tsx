import React, { useEffect, useState } from 'react';

const PainelAdmin = () => {
  const [dadosAdmin, setDadosAdmin] = useState<any[]>([]);
  const [aba, setAba] = useState<'usuarios' | 'pedidos' | 'dashboard'>('usuarios');
  const [produtorSelecionado, setProdutorSelecionado] = useState<any | null>(null);
  const [orcamento, setOrcamento] = useState<any>({});

  useEffect(() => {
    const dadosBrutos = JSON.parse(localStorage.getItem('dadosAdmin') || '[]');
    const dadosFiltrados = dadosBrutos.filter((d: any) => d?.produtor?.email && d?.produtor?.nome);
    setDadosAdmin(dadosFiltrados);
  }, []);

  const selecionarProdutor = (email: string) => {
    const selecionado = dadosAdmin.find((d) => d.produtor.email === email);
    setProdutorSelecionado(selecionado);

    const orc = JSON.parse(localStorage.getItem('orcamento_' + email) || '[]');
    const base = {};
    orc.forEach((p: any, index: number) => {
      base[index] = { preco: p.preco || '', embalagem: p.embalagem || '' };
    });
    setOrcamento(base);
  };

  const handleChange = (index: number, campo: string, valor: string) => {
    setOrcamento({
      ...orcamento,
      [index]: {
        ...orcamento[index],
        [campo]: valor
      }
    });
  };

  const salvarOrcamento = () => {
    if (!produtorSelecionado) return;

    const novos = produtorSelecionado.produtos.map((p: any, i: number) => ({
      ...p,
      preco: orcamento[i]?.preco || '',
      embalagem: orcamento[i]?.embalagem || ''
    }));

    localStorage.setItem('orcamento_' + produtorSelecionado.produtor.email, JSON.stringify(novos));
    alert('Orçamento salvo com sucesso!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Painel Administrativo BuyAgro</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setAba('usuarios')}>Usuários</button>
        <button onClick={() => setAba('pedidos')}>Pedidos</button>
        <button onClick={() => setAba('dashboard')}>Dashboard</button>
      </div>

      {aba === 'usuarios' && (
        <div>
          <h4>Lista de Produtores</h4>
          <ul>
            {dadosAdmin.map((d, i) => (
              <li key={i}>
                <button onClick={() => selecionarProdutor(d.produtor.email)}>
                  {d.produtor.nome} - {d.produtor.telefone}
                </button>
              </li>
            ))}
          </ul>

          {produtorSelecionado && (
            <div style={{ marginTop: '20px' }}>
              <h4>Dados do Produtor</h4>
              <p><strong>Nome:</strong> {produtorSelecionado.produtor.nome}</p>
              <p><strong>Telefone:</strong> {produtorSelecionado.produtor.telefone}</p>
              <p><strong>Email:</strong> {produtorSelecionado.produtor.email}</p>
              <p><strong>Fazenda:</strong> {produtorSelecionado.produtor.fazenda}</p>
              <p><strong>Cultura:</strong> {produtorSelecionado.produtor.cultura}</p>
              <p><strong>Área:</strong> {produtorSelecionado.produtor.tamanhoArea}</p>

              <h4 style={{ marginTop: '20px' }}>Produtos Desejados</h4>
              <ul>
                {produtorSelecionado.produtos.map((p: any, i: number) => (
                  <li key={i}>
                    [{p.categoria}] {p.nome} - {p.volume} {p.unidade}
                    <br />
                    Preço: <input
                      type="text"
                      value={orcamento[i]?.preco || ''}
                      onChange={(e) => handleChange(i, 'preco', e.target.value)}
                    />
                    Embalagem: <input
                      type="text"
                      value={orcamento[i]?.embalagem || ''}
                      onChange={(e) => handleChange(i, 'embalagem', e.target.value)}
                    />
                  </li>
                ))}
              </ul>
              <button onClick={salvarOrcamento}>Salvar Orçamento</button>
            </div>
          )}
        </div>
      )}

      {aba === 'pedidos' && (
        <div>
          <h4>Todos os Pedidos</h4>
          {dadosAdmin.map((d, i) => (
            <div key={i} style={{ marginBottom: '20px' }}>
              <strong>{d.produtor.nome}</strong>
              <ul>
                {d.produtos.map((p: any, j: number) => (
                  <li key={j}>
                    [{p.categoria}] {p.nome} - {p.volume} {p.unidade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {aba === 'dashboard' && (
        <div>
          <h4>Resumo</h4>
          <p>Total de produtores: {dadosAdmin.length}</p>
          <p>Total de pedidos: {dadosAdmin.reduce((acc, d) => acc + d.produtos.length, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default PainelAdmin;








