export default function Layout({ children }) {
  return (
    <div>
      <header style={{
        backgroundColor: '#003366',
        padding: '10px 20px',
        color: '#fff',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontWeight: 'bold' }}>BuyAgro</span>
        <span style={{ fontSize: 14, fontStyle: 'italic' }}>Conectando Produtores</span>
      </header>
      <main style={{ padding: '30px' }}>{children}</main>
    </div>
  );
}
