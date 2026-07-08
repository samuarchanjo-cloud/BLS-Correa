import { ArrowRight } from 'lucide-react'
import { whatsappUrl } from '../constants'

function CtaButton({ children, variant = 'primary', href = whatsappUrl, icon: Icon }) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {Icon ? <Icon size={22} /> : null}
      <span>{children}</span>
      {!Icon && variant !== 'phone' ? <ArrowRight size={22} /> : null}
    </a>
  )
}

export default CtaButton
