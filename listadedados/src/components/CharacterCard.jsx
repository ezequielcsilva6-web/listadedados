import './CharacterCard.css';

export function CharacterCard({ character, onDelete }) {
  return (
    <div className="character-card">
      <div className="card-header">
        <div className="header-content">
          <h3 className="character-name">{character.name}</h3>
          <span className="character-role">{character.role}</span>
        </div>
        {onDelete && (
          <button 
            className="delete-btn"
            onClick={() => {
              if (window.confirm(`Tem certeza que deseja deletar ${character.name}?`)) {
                onDelete(character.id)
              }
            }}
            title="Deletar personagem"
          >
            ✕
          </button>
        )}
      </div>
      
      <div className="card-body">
        <div className="info-item">
          <span className="info-label">🌍 Origem:</span>
          <span className="info-value">{character.origin}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">⚡ Habilidade Principal:</span>
          <span className="info-value">{character.mainAttribute}</span>
        </div>
        
        <div className="info-item bio">
          <span className="info-label">📖 Bio:</span>
          <p className="bio-text">{character.bio}</p>
        </div>
      </div>
    </div>
  );
}
