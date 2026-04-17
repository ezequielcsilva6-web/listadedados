import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-text">ONE PIECE</div>
          <div className="skull-icon">☠️</div>
        </div>
        <h1 className="title">Tripulação do Chapéu de Palha</h1>
        <p className="subtitle">Conheça os membros do maior bando de piratas da era de ouro dos piratas</p>
      </div>
    </header>
  );
}
