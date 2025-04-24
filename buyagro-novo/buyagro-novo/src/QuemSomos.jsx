import React from 'react';
import './QuemSomos.css';

const QuemSomos = () => {
  return (
    <div className="quem-somos-container">
      <h1 className="titulo-principal">BuyAgro</h1>
      <h2 className="subtitulo">Conectando Produtores</h2>

      <section className="bloco">
        <h3>Quem Somos</h3>
        <p>
          A <strong>BuyAgro</strong> nasceu com a missão de <strong>encurtar o caminho entre o produtor rural e a indústria</strong>, facilitando o acesso a insumos agrícolas com preço justo, agilidade e segurança. Somos uma plataforma de <strong>compra coletiva inteligente</strong>, que conecta produtores com demandas semelhantes, formando grandes volumes de pedido para <strong>negociar melhores condições com fornecedores</strong>.
        </p>
      </section>

      <section className="bloco">
        <h3>O Que Fazemos</h3>
        <p>
          Reunimos vários produtores que buscam os mesmos produtos — como defensivos, fertilizantes e especialidades agrícolas —, unificamos esses pedidos e geramos maior volume de compra. Assim, conseguimos <strong>melhores preços, mais descontos e maior poder de negociação</strong>, beneficiando cada produtor individualmente.
        </p>
      </section>

      <section className="bloco">
        <h3>Nossa Missão</h3>
        <p>
          Tornar o agro mais conectado, acessível e eficiente, utilizando a força da união entre produtores para <strong>reduzir custos, simplificar processos e potencializar resultados</strong>.
        </p>
      </section>

      <section className="bloco">
        <h3>Nossos Valores</h3>
        <ul>
          <li>Transparência em todas as negociações</li>
          <li>Compromisso com o resultado do produtor</li>
          <li>Tecnologia a serviço do campo</li>
          <li>Eficiência e agilidade nas operações</li>
          <li>Força da união e do cooperativismo</li>
        </ul>
      </section>
    </div>
  );
};

export default QuemSomos;