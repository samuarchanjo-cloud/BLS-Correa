import { Building2, Calendar, Headphones, ShieldCheck, TriangleAlert } from 'lucide-react'
import heroImage from '../assets/hero-safety-engineer.png'
import CtaButton from './CtaButton'

const highlights = [
  { icon: Headphones, label: 'Atendimento técnico' },
  { icon: ShieldCheck, label: 'Conformidade com as normas' },
  { icon: TriangleAlert, label: 'Prevenção de riscos' },
  { icon: Building2, label: 'Segurança empresarial' },
]

function Hero() {
  return (
    <section id="inicio" className="fullscreen dark-section hero-section">
      <img className="section-photo" src={heroImage} alt="" aria-hidden="true" />
      <div className="photo-overlay" />
      <div className="container fullscreen-content hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Engenharia que protege vidas e valoriza negócios</span>
          <h1>
            Engenharia de Segurança do Trabalho que gera{' '}
            <span>conformidade e resultados</span>.
          </h1>
          <p>
            Soluções completas em segurança do trabalho para sua empresa:{' '}
            <strong>treinamentos de NRs, laudos, programas, consultoria técnica</strong> e{' '}
            <strong>projetos de incêndio</strong> com foco em prevenção e conformidade.
          </p>
          <div className="button-row">
            <CtaButton icon={Calendar}>Solicitar atendimento</CtaButton>
            <CtaButton variant="outline" href="#servicos">
              Conhecer serviços
            </CtaButton>
          </div>
        </div>

        <div className="feature-strip" aria-label="Destaques">
          {highlights.map(({ icon: Icon, label }) => (
            <div className="feature-item" key={label}>
              <Icon size={42} strokeWidth={2.1} />
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
