import { useState } from 'react'
import { Header } from './components/Header'
import { CharacterCard } from './components/CharacterCard'
import { AddCharacterForm } from './components/AddCharacterForm'
import { FloatingLogo } from './components/FloatingLogo'
import { characters as initialCharacters } from './data/characters'
import './App.css'

function App() {
  const [characters, setCharacters] = useState(initialCharacters)

  const handleAddCharacter = (newCharacterData) => {
    const newCharacter = {
      id: Math.max(...characters.map(c => c.id), 0) + 1,
      ...newCharacterData
    }
    setCharacters([...characters, newCharacter])
  }

  const handleDeleteCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <AddCharacterForm onAddCharacter={handleAddCharacter} />
        
        {characters.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum personagem adicionado ainda. Adicione um novo personagem para começar!</p>
          </div>
        ) : (
          <div className="characters-grid">
            {characters.map((character) => (
              <CharacterCard 
                key={character.id} 
                character={character}
                onDelete={handleDeleteCharacter}
              />
            ))}
          </div>
        )}
      </main>
      
      <footer className="footer">
        <p>© 2026 - Catálogo One Piece | Desenvolvido com React + Vite | {characters.length} personagem(ns)</p>
      </footer>
      
      <FloatingLogo />
    </div>
  )
}

export default App
