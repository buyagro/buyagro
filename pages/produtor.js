export default function Produtor() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo, Produtor</h2>
      <p>Confira as cotações disponíveis:</p>
      <ul>
        <li>Glifosato 480 SL – R$ 17,70/L (volume total: 12.000L)</li>
        <li>Cletodim 240 EC – R$ 34,90/L (volume total: 6.200L)</li>
      </ul>
      <p>Deseja participar? Clique no botão abaixo:</p>
      <a href="https://wa.me/5561999999999?text=Quero+participar+da+compra+coletiva+de+Glifosato" target="_blank">
        <button>Gerar Pedido e Enviar via WhatsApp</button>
      </a>
    </div>
  );
}
