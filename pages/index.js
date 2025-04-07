import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2 style={{ color: '#006400' }}>Selecione sua função:</h2>
      <div style={{ marginTop: '20px' }}>
        <Link href="/produtor"><button style={{ margin: 10 }}>Sou Produtor</button></Link>
        <Link href="/fornecedor"><button style={{ margin: 10 }}>Sou Fornecedor</button></Link>
        <Link href="/admin"><button style={{ margin: 10 }}>Painel Administrativo</button></Link>
      </div>
    </Layout>
  );
}
