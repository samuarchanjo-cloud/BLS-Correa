import { ShieldCheck } from 'lucide-react'

function Logo({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand-dark' : ''}`} href="#inicio" aria-label="BLS Corrêa">
      <span className="brand-mark" aria-hidden="true">
        <ShieldCheck size={34} strokeWidth={2.2} />
      </span>
      <span className="brand-copy">
        <strong>BLS Corrêa</strong>
        <small>Engenharia de Segurança do Trabalho</small>
      </span>
    </a>
  )
}

export default Logo
