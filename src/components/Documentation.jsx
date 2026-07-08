import { Calendar, FileText, Search, ShieldCheck, UsersRound } from 'lucide-react'
import CtaButton from './CtaButton'
import SectionTitle from './SectionTitle'

const documents = [
  {
    icon: Search,
    title: 'Análise de Riscos',
    text: 'Identificamos e avaliamos os riscos ocupacionais para definir medidas de controle eficazes e priorizar a segurança no ambiente de trabalho.',
    example: 'Ex.: APR, Análise Preliminar de Riscos',
  },
  {
    icon: FileText,
    title: 'Documentação Técnica',
    text: 'Elaboramos laudos e documentos técnicos exigidos pela legislação trabalhista e previdenciária com rigor e responsabilidade técnica.',
    example: 'Ex.: LTCAT, Laudos de Insalubridade e Periculosidade, PPP',
  },
  {
    icon: ShieldCheck,
    title: 'Programas Preventivos',
    text: 'Desenvolvemos programas que promovem a saúde ocupacional, a prevenção de acidentes e a melhoria contínua dos processos.',
    example: 'Ex.: PGR, PCMSO, PPP, PCA',
  },
  {
    icon: UsersRound,
    title: 'Acompanhamento Consultivo',
    text: 'Oferecemos suporte contínuo para manter sua empresa em conformidade e preparada para auditorias e fiscalizações.',
    example: 'Ex.: Visitas técnicas, relatórios, indicadores e recomendações',
  },
]

function Documentation() {
  return (
    <section id="laudos" className="light-section documentation-section">
      <div className="container">
        <TechnicalIllustration />
        <SectionTitle eyebrow="Documentação e Regularização" title="Laudos, Programas e Regularização">
          Soluções técnicas que garantem <strong>conformidade legal, reduzem riscos</strong> e promovem{' '}
          <strong>ambientes de trabalho mais seguros</strong> e produtivos.
        </SectionTitle>

        <div className="document-grid">
          {documents.map(({ icon: Icon, title, text, example }) => (
            <article className="document-card" key={title}>
              <div className="document-icon">
                <Icon size={52} />
              </div>
              <h3>{title}</h3>
              <span className="small-rule" />
              <p>{text}</p>
              <div className="document-example">{example}</div>
            </article>
          ))}
        </div>

        <div className="dark-cta">
          <div>
            <ShieldCheck size={48} />
            <strong>Conformidade legal, redução de riscos e proteção para o que mais importa: pessoas.</strong>
          </div>
          <CtaButton icon={Calendar}>Solicitar atendimento</CtaButton>
        </div>
      </div>
    </section>
  )
}

function TechnicalIllustration() {
  return (
    <svg className="technical-illustration" viewBox="0 0 420 240" aria-hidden="true">
      <rect x="20" y="38" width="136" height="172" rx="12" />
      <rect x="60" y="16" width="56" height="38" rx="10" />
      <path d="M58 88h62M58 122h62M58 156h48" />
      <path d="m42 86 12 12 22-28M42 120l12 12 22-28M42 154l12 12 22-28" />
      <path d="M196 66h42v144h-42zM252 82h42v128h-42zM308 98h42v112h-42z" />
      <path d="M224 146c31 0 56 25 56 56-37-10-62-30-74-61 6 3 12 5 18 5Z" />
      <path d="m226 174 18 18 44-50" />
    </svg>
  )
}

export default Documentation
