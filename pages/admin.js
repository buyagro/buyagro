import Layout from '../components/Layout';

export default function Admin() {
  return (
    <Layout>
      <h2>Painel Administrativo</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Produtor</th>
            <th>Produto</th>
            <th>Volume (L)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Lima</td>
            <td>Glifosato</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Carlos Mendes</td>
            <td>Cletodim</td>
            <td>600</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: 10 }}><strong>Volume total:</strong> 1000L</p>
      <p><strong>Melhor preço atual:</strong> R$ 17,70/L</p>
    </Layout>
  );
}
