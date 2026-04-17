import { useState } from 'react'
import './AddCharacterForm.css'

export function AddCharacterForm({ onAddCharacter }) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    origin: '',
    mainAttribute: '',
    bio: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.role || !formData.origin || !formData.mainAttribute || !formData.bio) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    onAddCharacter(formData)
    setFormData({
      name: '',
      role: '',
      origin: '',
      mainAttribute: '',
      bio: ''
    })
    setShowForm(false)
  }

  return (
    <div className="form-container">
      <button 
        className="toggle-form-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? '✕ Cancelar' : '➕ Adicionar Personagem'}
      </button>

      {showForm && (
        <form className="add-character-form" onSubmit={handleSubmit}>
          <h3>Novo Personagem</h3>
          
          <div className="form-group">
            <label htmlFor="name">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Luffy"
              maxLength="50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Função/Papel *</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Ex: Capitão"
              maxLength="30"
            />
          </div>

          <div className="form-group">
            <label htmlFor="origin">Origem *</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Ex: Goa"
              maxLength="50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mainAttribute">Habilidade Principal *</label>
            <input
              type="text"
              id="mainAttribute"
              name="mainAttribute"
              value={formData.mainAttribute}
              onChange={handleChange}
              placeholder="Ex: Boa de vontade"
              maxLength="50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Biografia *</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Escreva um resumo sobre o personagem..."
              maxLength="200"
              rows="4"
            />
            <small>{formData.bio.length}/200</small>
          </div>

          <button type="submit" className="submit-btn">
            Adicionar Personagem
          </button>
        </form>
      )}
    </div>
  )
}
