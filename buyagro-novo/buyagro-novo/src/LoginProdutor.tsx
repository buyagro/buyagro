import React, { useState } from 'react';

const LoginProdutor = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    const produtores = JSON.parse(localStorage.getItem('cadastroProdutores') || '[]');
    const produtor = produtores.find((p: any) => p.email === email && p.senha === senha);

    if (produtor) {
      localStorage.setItem('produtorLogado', JSON.stringify(produtor));
      alert('Login realizado com sucesso!');
      // Redireciona para o painel do produtor
      window.location.href = '/painel-produtor';
    } else {
      setErro('E-mail ou senha incorretos.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login do Produtor</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <p style={{ marginTop: '10px' }}>
        Ainda não tem cadastro? <a href="/cadastro-produtor">Criar novo usuário</a>
      </p>
    </div>
  );
};

export default LoginProdutor;


