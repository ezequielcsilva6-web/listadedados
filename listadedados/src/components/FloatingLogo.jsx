import logoImg from '../assets/imagem.png'
import './FloatingLogo.css'

export function FloatingLogo() {
  return (
    <div className="floating-logo">
      <img src={logoImg} alt="Z3 4sford Logo" title="Desenvolvido com Z3 4sford" />
    </div>
  )
}
