import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2>Escolha seu perfil:</h2>
      <div style={{ marginTop: 30 }}>
        <Link href="/produtor"><button style={{ margin: 10 }}>Sou Produtor</button></Link>
        <Link href="/fornecedor"><button style={{ margin: 10 }}>Sou Fornecedor</button></Link>
        <Link href="/admin"><button style={{ margin: 10 }}>Painel Admin</button></Link>
      </div>
    </Layout>
  );
}
