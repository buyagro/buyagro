import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>BuyAgro — Conectando Produtores</h1>
      <p>Escolha seu perfil para continuar:</p>
      <div style={{ marginTop: '30px' }}>
        <Link href="/produtor"><button style={{ margin: 10 }}>Sou Produtor</button></Link>
        <Link href="/fornecedor"><button style={{ margin: 10 }}>Sou Fornecedor</button></Link>
        <Link href="/admin"><button style={{ margin: 10 }}>Painel Admin</button></Link>
      </div>
    </div>
  );
}
