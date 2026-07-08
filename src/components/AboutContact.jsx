import { Award, BarChart3, Headphones, Handshake, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import CtaButton from './CtaButton'

const differentials = [
  {
    icon: ShieldCheck,
    title: 'Compromisso com a vida',
    text: 'Colocamos as pessoas em primeiro lugar.',
  },
  {
    icon: BarChart3,
    title: 'Foco em resultados',
    text: 'Soluções que geram impacto real e mensurável.',
  },
  {
    icon: Handshake,
    title: 'Parceria e confiança',
    text: 'Trabalhamos lado a lado com nossos clientes.',
  },
  {
    icon: Award,
    title: 'Qualidade e responsabilidade',
    text: 'Excelência técnica com ética e comprometimento.',
  },
]

function AboutContact() {
  return (
    <section id="sobre" className="light-section about-section">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Engenharia que protege, previne e transforma</span>
          <h2>
            Atendimento técnico com foco em <span>prevenção e conformidade</span>
          </h2>
          <p className="about-text">
            A BLS Correa, liderada pelo profissional Bruno Correoa, oferece suporte técnico
            especializado para empresas que buscam ambientes de trabalho mais seguros e em
            conformidade com a lei. Atuamos com treinamentos, elaboração de documentos,
            avaliações e programas que reduzem riscos, protegem pessoas e fortalecem a gestão.
          </p>

          <div id="diferenciais" className="differential-grid">
            {differentials.map(({ icon: Icon, title, text }) => (
              <article className="differential-card" key={title}>
                <Icon size={48} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside id="contato" className="contact-card">
          <span className="contact-eyebrow">
            <Headphones size={28} />
            Fale com um especialista
          </span>
          <h3>Vamos conversar sobre como podemos ajudar sua empresa a estar segura e em conformidade?</h3>
          <p>Entre em contato e solicite uma avaliação personalizada com um de nossos especialistas.</p>
          <div className="contact-actions">
            <CtaButton icon={MessageCircle}>Falar no WhatsApp</CtaButton>
            <CtaButton variant="outline" href="tel:+5521975729513" icon={Phone}>
              (21) 97572-9513
            </CtaButton>
          </div>
          <div className="contact-note">
            <ShieldCheck size={34} />
            <span>Rapidez no atendimento, precisão técnica e compromisso com a sua segurança.</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutContact
