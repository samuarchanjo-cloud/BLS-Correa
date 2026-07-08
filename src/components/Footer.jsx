import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { whatsappUrl } from '../constants'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Soluções completas em segurança do trabalho para sua empresa, com foco em prevenção,
            conformidade e resultados.
          </p>
        </div>

        <div className="footer-column">
          <h4>Nossos serviços</h4>
          <ul>
            <li>Treinamentos de NRs</li>
            <li>Laudos e avaliações</li>
            <li>Programas de segurança</li>
            <li>Consultoria técnica</li>
            <li>Projetos de incêndio</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Atendimento</h4>
          <ul className="footer-contact-list">
            <li>
              <Phone size={18} />
              <a href="tel:+5521975729513">(21) 97572-9513</a>
            </li>
            <li>
              <MessageCircle size={18} />
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:contato@blscorrea.com.br">contato@blscorrea.com.br</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Rio de Janeiro - RJ</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Siga-nos</h4>
          <a className="social-button" href="https://www.linkedin.com/" aria-label="LinkedIn">
            <ExternalLink size={28} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 BLS Correa. Todos os direitos reservados.</div>
    </footer>
  )
}

export default Footer
