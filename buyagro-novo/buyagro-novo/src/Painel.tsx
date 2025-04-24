import React from 'react';
import { useNavigate } from 'react-router-dom';

const Painel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h2>Selecione o tipo de acesso</h2>
      <button
        onClick={() => navigate('/admin')}
        style={{ margin: '10px', padding: '15px 30px', fontSize: '16px' }}
      >
        Administrador
      </button>
      <button
        onClick={() => navigate('/login-produtor')}
        style={{ margin: '10px', padding: '15px 30px', fontSize: '16px' }}
      >
        Produtor
      </button>
    </div>
  );
};

export default Painel;

