import { Calendar, ClipboardList, Flame, Route, UsersRound } from 'lucide-react'
import fireImage from '../assets/fire-safety-corridor.png'
import CtaButton from './CtaButton'

const fireCards = [
  { icon: Flame, label: 'Projeto de incêndio' },
  { icon: ClipboardList, label: 'Plano de emergência' },
  { icon: Route, label: 'Rotas de fuga' },
  { icon: UsersRound, label: 'Prevenção contra pânico' },
]

function FirePrevention() {
  return (
    <section id="incendio" className="fullscreen dark-section fire-section">
      <img className="section-photo" src={fireImage} alt="" aria-hidden="true" />
      <div className="photo-overlay" />
      <div className="container fullscreen-content fire-content">
        <span className="eyebrow">Proteção que salva vidas e preserva o futuro</span>
        <h2>
          Prevenção contra incêndio e plano de emergência com foco em{' '}
          <span>responsabilidade e segurança</span>.
        </h2>
        <p>
          Desenvolvemos soluções completas para prevenção de incêndios e situações de emergência,
          garantindo ambientes mais seguros, equipes preparadas e respostas rápidas quando mais importa.
        </p>
        <div className="fire-card-grid">
          {fireCards.map(({ icon: Icon, label }) => (
            <article className="glass-card" key={label}>
              <Icon size={40} />
              <strong>{label}</strong>
            </article>
          ))}
        </div>
        <CtaButton icon={Calendar}>Solicitar atendimento</CtaButton>
      </div>
    </section>
  )
}

export default FirePrevention
