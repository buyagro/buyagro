
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Head>
        <title>BuyAgro - Conectando Produtores</title>
      </Head>
      <h1>BuyAgro — Conectando Produtores</h1>
      <p>Plataforma de compras coletivas no agro.</p>
      <ul>
        <li><Link href="/produtor">Área do Produtor</Link></li>
        <li><Link href="/fornecedor">Área do Fornecedor</Link></li>
        <li><Link href="/admin">Painel Administrativo</Link></li>
      </ul>
    </div>
  );
}
