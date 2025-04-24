import React from 'react';
import './style.css';
import algodao from './algodao.jpg';
import soja from './soja.jpg';
import milho from './milho.jpg';
import caminhao from './caminhao.png';
import logo from './logo-byagro.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Logo em tamanho grande */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '250px' }}>
          <button
            onClick={() => navigate('/painel')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Acessar Painel de Controle
          </button>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${algodao})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content-box animate">
          <h2>Quem Somos </h2>
          <p>
            A <strong>BuyAgro</strong> nasceu com a missão de <strong>encurtar o caminho entre o produtor rural e a indústria</strong>, facilitando o acesso a insumos agrícolas com preço justo, agilidade e segurança. Somos uma plataforma de <strong>compra coletiva inteligente</strong>, que conecta produtores com demandas semelhantes, formando grandes volumes de pedido para <strong>negociar melhores condições com fornecedores</strong>.
          </p>
        </div>
      </section>

      {/* Seção O Que Fazemos*/}
      <section
        className="section"
        style={{
          backgroundImage: `url(${soja})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content-box animate">
          <h2>O Que Fazemos </h2>
          <p>
            Reunimos vários produtores que buscam os mesmos produtos — como defensivos, fertilizantes e especialidades agrícolas — unificamos esses pedidos e geramos maior volume de compra. Assim, conseguimos <strong>melhores preços, mais descontos e maior poder de negociação</strong>, beneficiando cada produtor individualmente.
          </p>
        </div>
      </section>

      {/* Seção Nossa Missão */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${milho})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content-box animate">
          <h2>Nossa Missão</h2>
          <p>
            Tornar o agro mais conectado, acessível e eficiente, utilizando a força da união entre produtores para <strong>reduzir custos, simplificar processos e potencializar resultados</strong>.
          </p>
        </div>
      </section>

      {/* Seção Nossos Valores */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${caminhao})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content-box animate">
          <h2>Nossos Valores</h2>
          <ul>
            <li>Transparência em todas as negociações</li>
            <li>Compromisso com o resultado do produtor</li>
            <li>Tecnologia a serviço do campo</li>
            <li>Eficiência e agilidade nas operações</li>
            <li>Força da união e do cooperativismo</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
