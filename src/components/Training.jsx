import { CheckCircle2, MessageCircle } from 'lucide-react'
import trainingImage from '../assets/training-safety-team.png'
import CtaButton from './CtaButton'

const items = [
  'Capacitação prática e dinâmica',
  'NRs aplicáveis ao seu segmento',
  'Treinamento in company',
  'Certificação e orientação técnica',
]

function Training() {
  return (
    <section id="treinamentos" className="fullscreen dark-section training-section">
      <img className="section-photo" src={trainingImage} alt="" aria-hidden="true" />
      <div className="photo-overlay" />
      <div className="container fullscreen-content narrow-content">
        <span className="eyebrow">Treinamentos em Segurança do Trabalho</span>
        <h2>
          Treinamentos que protegem sua equipe{' '}
          <span>e fortalecem sua empresa</span>
        </h2>
        <ul className="check-list">
          {items.map((item) => (
            <li key={item}>
              <CheckCircle2 size={34} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="training-action">
          <CtaButton variant="outline" icon={MessageCircle}>
            Fale com um especialista
          </CtaButton>
          <small>Atendimento rápido via WhatsApp</small>
        </div>
      </div>
    </section>
  )
}

export default Training
