import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ backgroundColor: '#0a4', padding: '10px 20px', color: '#fff', fontSize: 20 }}>
        <span style={{ fontWeight: 'bold' }}>BuyAgro</span> — Conectando Produtores
      </header>
      <main style={{ padding: 20 }}>
        {children}
      </main>
    </div>
  );
}
