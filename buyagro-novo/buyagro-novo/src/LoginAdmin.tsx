import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === 'admin@buyagro.com' && senha.trim() === 'admin123') {
      navigate('/painel-admin');
    } else {
      alert('E-mail ou senha incorretos');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Login Administrativo</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Entrar</button>
      </form>
    </div>
  );
};

export default Admin;