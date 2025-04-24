import React, { useState } from 'react';

const CadastroProdutor = () => {
  const [form, setForm] = useState({
    nome: '',
    fazenda: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    cultura: '',
    tamanhoArea: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const salvarCadastro = () => {
    if (
      !form.nome || !form.fazenda || !form.email || !form.confirmarEmail || !form.senha || !form.confirmarSenha ||
      !form.telefone || !form.cultura || !form.tamanhoArea
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    if (form.email !== form.confirmarEmail) {
      alert("Os e-mails não coincidem.");
      return;
    }

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const cadastros = JSON.parse(localStorage.getItem('cadastroProdutores') || '[]');
    const existe = cadastros.some((prod: any) => prod.email === form.email);

    if (existe) {
      alert('Esse e-mail já foi cadastrado.');
      return;
    }

    const novoCadastro = {
      nome: form.nome,
      fazenda: form.fazenda,
      email: form.email,
      senha: form.senha,
      telefone: form.telefone,
      cultura: form.cultura,
      tamanhoArea: form.tamanhoArea
    };

    const novosCadastros = [...cadastros, novoCadastro];
    localStorage.setItem('cadastroProdutores', JSON.stringify(novosCadastros));

    alert('Cadastro realizado com sucesso!');
    // Aqui você pode redirecionar para o painel do produtor
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cadastro do Produtor</h2>
      <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} /><br />
      <input type="text" name="fazenda" placeholder="Nome da fazenda" value={form.fazenda} onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} /><br />
      <input type="email" name="confirmarEmail" placeholder="Confirmar e-mail" value={form.confirmarEmail} onChange={handleChange} /><br />
      <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} /><br />
      <input type="password" name="confirmarSenha" placeholder="Confirmar senha" value={form.confirmarSenha} onChange={handleChange} /><br />
      <input type="text" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} /><br />
      <input type="text" name="cultura" placeholder="Cultura" value={form.cultura} onChange={handleChange} /><br />
      <input type="text" name="tamanhoArea" placeholder="Tamanho da Área (ha)" value={form.tamanhoArea} onChange={handleChange} /><br />
      <button onClick={salvarCadastro}>Cadastrar</button>
    </div>
  );
};

export default CadastroProdutor;



