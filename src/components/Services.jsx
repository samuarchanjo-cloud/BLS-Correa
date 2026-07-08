import { ArrowRight, ClipboardCheck, Flame, HardHat, Headphones, Presentation } from 'lucide-react'
import CtaButton from './CtaButton'
import SectionTitle from './SectionTitle'

const services = [
  {
    icon: Presentation,
    title: 'Treinamentos de NRs',
    text: 'Capacitação completa da equipe nas Normas Regulamentadoras aplicáveis à sua atividade.',
  },
  {
    icon: ClipboardCheck,
    title: 'Laudos e Programas',
    text: 'Elaboração de laudos técnicos e programas obrigatórios para garantir conformidade legal.',
  },
  {
    icon: HardHat,
    title: 'Consultoria Técnica',
    text: 'Análise especializada e orientação para melhorias contínuas em segurança e saúde ocupacional.',
  },
  {
    icon: Flame,
    title: 'Projeto de Incêndio e Emergência',
    text: 'Desenvolvimento de projetos e planos de emergência para proteção de vidas e do patrimônio.',
  },
]

function Services() {
  return (
    <section id="servicos" className="light-section services-section">
      <div className="container">
        <ShieldWatermark />
        <SectionTitle eyebrow="Nossos serviços" title="Soluções em Segurança do Trabalho">
          Serviços completos para proteger sua equipe, garantir conformidade legal e promover ambientes
          de trabalho mais seguros e produtivos.
        </SectionTitle>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon className="large-icon" size={72} strokeWidth={1.8} />
              <span className="small-rule" />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight className="card-arrow" size={28} />
            </article>
          ))}
        </div>

        <div className="light-cta">
          <div className="light-cta-copy">
            <Headphones size={56} />
            <div>
              <strong>Precisa de uma solução personalizada para sua empresa?</strong>
              <span>Fale com um especialista e descubra como podemos ajudar.</span>
            </div>
          </div>
          <CtaButton>Falar com um especialista</CtaButton>
        </div>
      </div>
    </section>
  )
}

function ShieldWatermark() {
  return (
    <svg className="section-watermark" viewBox="0 0 220 250" aria-hidden="true">
      <path d="M110 12 196 43v70c0 63-39 106-86 123-47-17-86-60-86-123V43l86-31Z" />
      <path d="m72 125 28 28 55-67" />
    </svg>
  )
}

export default Services
