import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Painel from './Painel';
import LoginProdutor from './LoginProdutor';
import CadastroProdutor from './CadastroProdutor';
import ProdutosDesejados from './ProdutosDesejados';
import LoginAdmin from './LoginAdmin';
import PainelAdmin from './PainelAdmin';
import PainelProdutor from './PainelProdutor';
import OrcamentoProdutor from './OrcamentoProdutor';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/painel" element={<Painel />} />
      <Route path="/login-produtor" element={<LoginProdutor />} />
      <Route path="/cadastro-produtor" element={<CadastroProdutor />} />
      <Route path="/produtos-desejados" element={<ProdutosDesejados />} />
      <Route path="/admin" element={<LoginAdmin />} />
      <Route path="/painel-admin" element={<PainelAdmin />} />
      <Route path="/painel-produtor" element={<PainelProdutor />} />
      <Route path="/orcamento-produtor" element={<OrcamentoProdutor />} />
    </Routes>
  );
};

export default App;


