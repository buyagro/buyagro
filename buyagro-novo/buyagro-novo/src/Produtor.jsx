import React, { useState } from 'react';
import './form.css';

function Produtor() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    localizacao: '',
    cultura: '',
    area: '',
    produtos: '',
    quantidade: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do produtor:', formData);
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <div className="form-container">
      <h2>Cadastro do Produtor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
        <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} required />
        <input type="text" name="localizacao" placeholder="Localização" onChange={handleChange} required />
        <select name="cultura" onChange={handleChange} required>
          <option value="">Selecione a cultura</option>
          <option value="soja">Soja</option>
          <option value="milho">Milho</option>
          <option value="algodão">Algodão</option>
          <option value="tomate">Tomate</option>
          <option value="cana de açúcar">Cana de Açúcar</option>
          <option value="sorgo">Sorgo</option>
          <option value="ervilha">Ervilha</option>
        </select>
        <input type="number" name="area" placeholder="Área (ha)" onChange={handleChange} required />
        <input type="text" name="produtos" placeholder="Produtos desejados" onChange={handleChange} required />
        <input type="number" name="quantidade" placeholder="Quantidade total" onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Produtor;