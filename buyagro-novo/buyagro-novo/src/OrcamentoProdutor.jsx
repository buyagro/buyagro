import React, { useEffect, useState } from 'react';

const OrcamentoProdutor = () => {
  const [produtosComPreco, setProdutosComPreco] = useState([]);
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    const produtos = JSON.parse(localStorage.getItem('orcamentoComPreco') || '[]');
    const dadosProdutor = JSON.parse(localStorage.getItem('dadosProdutor') || '{}');
    setProdutosComPreco(produtos);
    setTelefone(dadosProdutor.telefone || '');
  }, []);

  const aprovarPedido = () => {
    const resumo = produtosComPreco.map(p => `${p.nome} - ${p.volume} - ${p.preco}`).join('\n');
    const mensagem = encodeURIComponent(
      `Olá! Confirmo meu pedido na BuyAgro:\n${resumo}`
    );
    const linkWhatsApp = `https://wa.me/55${telefone}?text=${mensagem}`;
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#004d00' }}>Orçamento Recebido</h2>

      {produtosComPreco.length === 0 ? (
        <p>Você ainda não recebeu nenhum orçamento.</p>
      ) : (
        <>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Volume</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtosComPreco.map((p, i) => (
                <tr key={i}>
                  <td>{p.nome}</td>
                  <td>{p.volume}</td>
                  <td>{p.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={aprovarPedido} style={botao}>
            Aprovar Pedido e Enviar por WhatsApp
          </button>
        </>
      )}
    </div>
  );
};

const botao = {
  marginTop: '20px',
  padding: '12px 20px',
  backgroundColor: '#007b33',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default OrcamentoProdutor;
